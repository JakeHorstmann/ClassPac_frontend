import LoginBox from "@/components/LoginBox"
import { Text } from "react-native"
import { useAuth } from "@/components/AuthProvider"

export default function AccountScreen() {
    const { user, ...rest } = useAuth()
    return (
        <>
            <Text>This is the account screen</Text>
            <LoginBox />
        </>
    );
}