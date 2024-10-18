import { View, Text, KeyboardAvoidingView, Pressable } from "react-native"
import { useState } from "react"
import { useAuth } from "@/components/AuthProvider"
import { useRouter, Redirect } from "expo-router"
import FloatingLabelInputBox from "@/components/FloatingLabelInputBox"
import AuthButton from "@/components/AuthButton"

export default function LoginScreen() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { user, login } = useAuth() // add user back in here
    const router = useRouter()
    return (
        <>
            {
                user ? <Redirect href="/account/" />
                    :
                    <View className="w-4/5 border-2 border-blue-300 rounded-2xl justify-center items-center align-top">
                        <View className="w-4/5 justify-center">
                            <View className="py-4 justify-between align-center">
                                <KeyboardAvoidingView behavior="padding">
                                    {/* Email Input */}
                                    <FloatingLabelInputBox label="Enter email" value={email} onChangeText={setEmail} />
                                    {/* Password Input */}
                                    <FloatingLabelInputBox label="Enter password" value={password} onChangeText={setPassword} secureTextEntry={true} />
                                </KeyboardAvoidingView>
                                {/* Login Button */}
                                <AuthButton label="Login" onPress={() => login(email, password)} />
                                {/* Register Navigation */}
                                <Pressable className="mt-4" onPress={() => router.push("./register/")}>
                                    <Text className="text-blue-500 text-center">Don't have an account? Register</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
            }
        </>
    );
}