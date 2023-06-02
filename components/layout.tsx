import type { ReactNode } from "react"

import Header from "./header"
import Footer from "./footer"
import { ClientResources } from "@/components/client-resources"


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header/>
            <ClientResources>
                <main>{children}</main>
            </ClientResources>
            <Footer/>
        </>
    )
}
