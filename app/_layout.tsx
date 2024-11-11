import { Stack } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AuthProvider from "@/components/AuthProvider"
import "@/styles/global.css"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "@react-navigation/native"
import { useColorScheme } from "nativewind"
import { LightTheme, DarkTheme } from "@/styles/themes"

export default function RootLayout() {

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <AuthProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : LightTheme}>
                <SafeAreaProvider>
                    <StatusBar style="auto" />
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="(tabs)" />
                    </Stack>
                </SafeAreaProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}