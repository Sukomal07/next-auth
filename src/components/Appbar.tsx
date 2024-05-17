"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            <div className="flex justify-between items-center px-20 py-4 text-xl">
                <button onClick={() => signIn()}>Signin</button>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
            <p className="text-center text-slate-600 text-xl">{JSON.stringify(session.data?.user)}</p>
        </div>
    )
}