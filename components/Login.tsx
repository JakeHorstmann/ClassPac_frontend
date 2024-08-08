import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native"
import { useState } from "react"
import { FIREBASE_APP, FIREBASE_AUTH } from "../firebaseConfig"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert("check your info")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View>
            <KeyboardAvoidingView behavior="padding">
                <TextInput value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <>
                        <Button title="Login" onPress={signIn} />
                        <Button title="Create account" onPress={signUp} />
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
}