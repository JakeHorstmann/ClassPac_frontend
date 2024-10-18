import { Stack } from "expo-router"
import { SafeAreaView } from "react-native"
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
                <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === "dark" ? "black" : "white" }}>
                    <StatusBar style="auto" />
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="(tabs)" />
                    </Stack>
                </SafeAreaView>
            </ThemeProvider>
        </AuthProvider>
    );
}