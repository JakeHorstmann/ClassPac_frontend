import { View, Text } from "react-native"
import { Slot } from "expo-router"
import { useState, useEffect } from "react"
import { onAuthStateChanged, User } from "firebase/auth"
import { FIREBASE_AUTH } from "../firebaseConfig"

import Header from "../components/Header"
import Navbar from "../components/Navbar"

import "../styles/global.css"

export default function RootLayout() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])

    return (
        <View className="flex basis-full flex-col justify-between">
            <Header />
            <Slot />
            <Navbar />
        </View>
    );
}