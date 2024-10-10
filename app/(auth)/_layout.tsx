import { View } from "react-native"
import { Slot } from "expo-router"

import Header from "@/components/Header"
import Navbar from "@/components/Navbar"

import { useAuth } from "@/components/AuthProvider"
import { useRouter, Redirect } from 'expo-router'

export default function AuthorizedLayout() {
    const { user, ...rest } = useAuth()
    const router = useRouter()

    return (<>
        {
            user ?
                <View className="flex basis-full flex-col justify-between">
                    <Header />
                    <Slot />
                    <Navbar />
                </View> :
                <Redirect href="/" />
        }
    </>)
}