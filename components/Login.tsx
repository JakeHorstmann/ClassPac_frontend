import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native"
import { useState } from "react"
import { useAuth } from "./AuthProvider"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { user, login, logout } = useAuth()


    return (
        <View>
            <KeyboardAvoidingView behavior="padding">
                <TextInput value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
                <>
                    <Button title="Login" onPress={() => login(email, password)} />
                    <Button title="Create account" onPress={logout} />
                </>
            </KeyboardAvoidingView>
        </View>
    );
}