import { UserButton, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import prismadb from "@/lib/prismadb"
import { useEffect, useState } from "react"

const Navbar = async () => {
    const { userId } = auth()
    if (!userId) redirect("/sign-in")
    const quizes = await prismadb.quiz.findMany({
        where: {
            userId
        }
    })
    console.log(quizes)
    return (
        <div className="border-b border-slate-200">
            <div className="flex h-16 items-center width-full px-4 bg-slate-500">
                <div>PIAIC</div>
                <div className="ml-auto flex items-center space-x-4 ">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )

}

export default Navbar