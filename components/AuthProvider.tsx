import React, { createContext, useState, useEffect, useContext } from 'react'
import { FIREBASE_AUTH } from '@/firebaseConfig'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, User } from "firebase/auth"
import { useRouter } from "expo-router"

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;

}

type AuthProviderType = {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({ children }: AuthProviderType) {
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])

    const login = async (email: string, password: string) => {
        console.log("PRESSED LOGIN")
        try {
            const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        console.log("PRESSED LOGOUT")
        try {
            await signOut(FIREBASE_AUTH);
        } catch (error) {
            console.log(error)
        }
    }

    const register = async (email: string, password: string, firstName: string, lastName: string) => {
        console.log("PRESSED REGISTER")
        try {
            const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            if (response.user) {
                await updateProfile(response.user, {
                    displayName: `${firstName} ${lastName}`
                }
                )
                console.log("User was created")
                router.push("./")

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
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