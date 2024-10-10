import { Text } from "react-native"
import { useAuth } from "@/components/AuthProvider"
import AuthButton from "@/components/AuthButton"

export default function AccountScreen() {
    const { user, logout } = useAuth()
    return (
        <>
            <Text>This is the account screen</Text>
            {/* Logout Button */}
            <AuthButton label="Logout" onPress={() => logout()} />
        </>
    );
}