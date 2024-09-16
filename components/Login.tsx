import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Animated, Pressable } from "react-native"
import { useState } from "react"
import { useAuth } from "./AuthProvider"
import { useRouter } from 'expo-router'

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { user, login, logout } = useAuth()
    const router = useRouter()

    const [emailLabelPosition] = useState(new Animated.Value(0)) // For floating label
    const [passwordLabelPosition] = useState(new Animated.Value(0)) // For floating label

    // Floating label animation
    const animateLabel = (labelPosition: Animated.Value, isFocused: boolean) => {
        Animated.timing(labelPosition, {
            toValue: isFocused ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    return (
        <View>
            <KeyboardAvoidingView behavior="padding">
                {/* <TextInput value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
                <>
                    <Button title="Login" onPress={() => login(email, password)} />
                    <Button title="Create account" onPress={logout} />
                </> */}
                {/* Email Input with Floating Label */}
                <View className="mb-5 relative">
                    <Animated.Text
                        className="absolute left-0 text-gray-400"
                        style={{
                            top: emailLabelPosition.interpolate({
                                inputRange: [0, 1],
                                outputRange: [20, 0], // Change from default position
                            }),
                            fontSize: emailLabelPosition.interpolate({
                                inputRange: [0, 1],
                                outputRange: [16, 12], // Adjust font size
                            }),
                        }}
                    >
                        Enter email
                    </Animated.Text>
                    <TextInput
                        className="border-b border-gray-300 py-2 text-lg"
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => animateLabel(emailLabelPosition, true)}
                        onBlur={() => animateLabel(emailLabelPosition, !!email)}
                    />
                </View>
                {/* Password Input with Floating Label */}
                <View className="mb-5 relative">
                    <Animated.Text
                        className="absolute left-0 text-gray-400"
                        style={{
                            top: passwordLabelPosition.interpolate({
                                inputRange: [0, 1],
                                outputRange: [20, 0], // Change from default position
                            }),
                            fontSize: passwordLabelPosition.interpolate({
                                inputRange: [0, 1],
                                outputRange: [16, 12], // Adjust font size
                            }),
                        }}
                    >
                        Enter password
                    </Animated.Text>
                    <TextInput
                        className="border-b border-gray-300 py-2 text-lg"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        onFocus={() => animateLabel(passwordLabelPosition, true)}
                        onBlur={() => animateLabel(passwordLabelPosition, !!password)}
                    />
                </View>
            </KeyboardAvoidingView>
            {/* Login Button */}
            <Pressable className="bg-blue-500 p-3 rounded" onPress={() => login(email, password)}>
                <Text className="text-white text-center">Login</Text>
            </Pressable>

            {/* Logout Button */}
            <Pressable className="bg-blue-500 p-3 rounded" onPress={() => logout()}>
                <Text className="text-white text-center">Logout</Text>
            </Pressable>

            {/* Register Navigation */}
            <Pressable className="mt-4" onPress={() => router.push("/register/register")}>
                <Text className="text-blue-500 text-center">Don't have an account? Register</Text>
            </Pressable>
        </View>
    )
}