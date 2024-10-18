import { Text, View } from "react-native"
import { useAuth } from "@/components/AuthProvider"
import AuthButton from "@/components/AuthButton"
import { useState } from "react"
import CheckBox from "expo-checkbox"
import { useColorScheme } from "nativewind"

export default function AccountScreen() {
    type Themes = "light" | "dark" | "system"
    const { user, logout } = useAuth()
    const { colorScheme, setColorScheme } = useColorScheme()
    const [theme, setTheme] = useState<Themes>(colorScheme === "dark" ? "dark" : "light")

    const changeTheme = (theme: Themes) => {
        setTheme(theme)
        setColorScheme(theme)
    }

    return (
        <>
            <Text>This is the account screen</Text>
            {/* Logout Button */}
            <AuthButton label="Logout" onPress={() => logout()} />
            <View className="flew-row items-center justify-center">
                <CheckBox value={theme === "light"} onValueChange={() => changeTheme("light")} />
                <CheckBox value={theme === "dark"} onValueChange={() => changeTheme("dark")} />
                <CheckBox value={theme === "system"} onValueChange={() => changeTheme("system")} />
            </View>
        </>
    );
}