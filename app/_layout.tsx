import { Slot } from "expo-router"
import { View, Text } from "react-native"
import AuthProvider from "@/components/AuthProvider"
import "@/styles/global.css"

export default function RootLayout() {
    return (
        <AuthProvider>
            <View className="h-2/5 items-center justify-center">
                <Text>ClassPac</Text>
            </View>
            <View className="h-3/5 items-center">
                <Slot />
            </View>
        </AuthProvider>
    );
}