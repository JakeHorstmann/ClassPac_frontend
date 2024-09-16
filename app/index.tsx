import Login from "@/components/Login"
import { View } from "react-native"

export default function LoginScreen() {
    return (
        <View className="w-4/5 h-3/5 border-2 border-blue-300 rounded-2xl justify-center items-center align-top">
            <View className="w-4/5 h-full justify-center">
                <Login />
            </View>
        </View>
    );
}