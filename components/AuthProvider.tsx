import React, { createContext, useState, useEffect, useContext } from 'react'
import { FIREBASE_AUTH } from '@/firebaseConfig'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth"

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
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

    const login = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            const response = await signOut(FIREBASE_AUTH);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};