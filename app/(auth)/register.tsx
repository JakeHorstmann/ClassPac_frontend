import { View, Text, KeyboardAvoidingView, Pressable } from "react-native"
import { useState } from "react"
import { useAuth } from "@/components/AuthProvider"
import { useRouter } from "expo-router"
import FloatingLabelInputBox from "@/components/FloatingLabelInputBox"
import AuthButton from "@/components/AuthButton"

export default function RegisterScreen() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const { register } = useAuth()
    const router = useRouter()
    return (
        <View className="w-4/5 border-2 border-blue-300 rounded-2xl justify-center items-center align-top">
            <View className="w-4/5 justify-center">
                <View className="py-4 justify-between align-center">
                    <KeyboardAvoidingView behavior="padding">
                        {/* Name Input */}
                        <View className="flex flex-row">
                            <View className="pr-2 w-1/2">
                                <FloatingLabelInputBox label="First name" value={firstName} onChangeText={setFirstName} />
                            </View>
                            <View className="pl-2 w-1/2">
                                <FloatingLabelInputBox label="Last name" value={lastName} onChangeText={setLastName} />
                            </View>
                        </View>
                        {/* Email Input */}
                        <FloatingLabelInputBox label="Email" value={email} onChangeText={setEmail} />
                        {/* Password Input */}
                        <FloatingLabelInputBox label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />

                    </KeyboardAvoidingView>

                    {/* Login Button */}
                    <AuthButton label="Register" onPress={() => register(email, password, firstName, lastName)} />
                    {/* Login Navigation */}
                    <Pressable className="mt-4" onPress={() => router.push("./login/")}>
                        <Text className="text-blue-500 text-center">Have an account? Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}