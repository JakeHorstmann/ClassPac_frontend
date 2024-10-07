import React from "react"
import { Pressable, Text } from "react-native"

interface AuthButtonProps {
    label: string
    onPress: () => void
}

export default function AuthButton({ label, onPress }: AuthButtonProps) {
    return (
        <Pressable className="bg-blue-500 p-3 rounded" onPress={onPress}>
            <Text className="text-white text-center">{label}</Text>
        </Pressable>
    )
}