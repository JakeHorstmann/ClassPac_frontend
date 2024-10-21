import React from "react"
import { Pressable, Text, View } from "react-native"

interface AuthButtonProps {
    label: string
    onPress: () => void
}

export default function AuthButton({ label, onPress }: AuthButtonProps) {
    return (
        <View className="py-2">
            <Pressable className="bg-box p-3 rounded" onPress={onPress}>
                <Text className="text-text text-center">{label}</Text>
            </Pressable>
        </View>
    )
}