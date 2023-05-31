import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        }
    },
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "guest" },
                email: { label: "Email", type: "text" }
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.username) throw new Error("Invalid Input")
                return {
                    username: credentials.username,
                    email: credentials.email,
                    id: "-1"
                }
            }
        })
    ]

}

export default NextAuth(authOptions)
