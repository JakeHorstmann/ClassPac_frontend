import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native"
import { useState } from "react"
import { useAuth } from "./AuthProvider"

import StyledInputText from "./StyledInputText"

export default function LoginBox() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const { user, login, logout } = useAuth()

  return (
    <View className="flex-grow bg-blue-200 justify-center items-center">
      <View className="w-4/5 h-4/5 border-solid border-4 border-black rounded-lg p-4 bg-red-500 justify-center">
        <KeyboardAvoidingView behavior="padding">
          <View className="flex-col justify-between gap-y-4">
            <StyledInputText
              placeholder="Email Address"
              value={email}
              autoCapitalize="none"
              onChangeText={(text: string) => setEmail(text)}
            />
            <StyledInputText
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(text: string) => setPassword(text)}
            />
          </View>
          <>
            <Button title="Login" onPress={() => login(email, password)} />
            <Button title="Create account" onPress={logout} />
          </>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}
