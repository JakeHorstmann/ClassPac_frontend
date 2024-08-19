import { View } from "react-native"
import { Slot } from "expo-router"

import Header from "@/components/Header"
import Navbar from "@/components/Navbar"

import "@/styles/global.css"
import AuthProvider from "@/components/AuthProvider"

export default function RootLayout() {

    return (
        <AuthProvider>
            <View className="flex basis-full flex-col justify-between">
                <Header />
                <Slot />
                <Navbar />
            </View>
        </AuthProvider>
    );
}