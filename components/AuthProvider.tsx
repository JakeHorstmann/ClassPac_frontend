import React, { createContext, useState, useEffect, useContext } from 'react'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth"

type AuthContextType = {
    user: User | null
}

type AuthProviderType = {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({ children }: AuthProviderType) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}
