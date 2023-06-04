import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { db } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
    // @see https://github.com/prisma/prisma/issues/16117
    adapter: PrismaAdapter(db as any),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user = Object.assign(session.user || {}, {
                    id: token.id,
                    name: token.name,
                    email: token.email,
                    image: token.picture,
                })
            }

            return session
        },
        async jwt({ token, user }) {
            if (!user || !token.email) return token

            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email,
                },
            })

            if (!dbUser) {
                token.id = user.id
                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                image: dbUser.avatar
            }
        },
    },
}
