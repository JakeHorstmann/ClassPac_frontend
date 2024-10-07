import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Animated, Pressable } from "react-native"
import { useState } from "react"
import { useAuth } from "./AuthProvider"
import { useRouter } from 'expo-router'
import FloatingLabelInputBox from "./FloatingLabelInputBox"
import AuthButton from "./AuthButton"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { user, login, logout } = useAuth()
    const router = useRouter()

    return (
        <View className="h-4/5 justify-between align-center">
            <KeyboardAvoidingView behavior="padding">
                {/* Email Input with Floating Label */}
                <FloatingLabelInputBox label="Enter email" value={email} onChangeText={setEmail} />

                {/* Password Input with Floating Label */}
                <FloatingLabelInputBox label="Enter password" value={password} onChangeText={setEmail} secureTextEntry={true} />
            </KeyboardAvoidingView>
            {/* Login Button */}
            <AuthButton label="Login" onPress={() => login} />
            {/* Logout Button */}
            <AuthButton label="Logout" onPress={() => logout} />
            {/* Register Navigation */}
            <Pressable className="mt-4" onPress={() => router.push("./register")}>
                <Text className="text-blue-500 text-center">Don't have an account? Register</Text>
            </Pressable>
        </View>
    )
}