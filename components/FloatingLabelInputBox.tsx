import React, { useState } from "react"
import { View, TextInput, Animated } from "react-native"

interface FloatingLabelInputBoxProps {
    label: string
    value: string
    onChangeText: (text: string) => void
    secureTextEntry?: boolean
}

export default function FloatingLabelInputBox({ label, value, onChangeText, secureTextEntry = false }: FloatingLabelInputBoxProps) {
    const [labelPosition] = useState(new Animated.Value(0))

    // Floating label animation
    const animateLabel = (isFocused: boolean) => {
        Animated.timing(labelPosition, {
            toValue: isFocused ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    return (
        <View className="mb-5 relative">
            <Animated.Text
                className="absolute left-0 text-gray-400"
                style={{
                    top: labelPosition.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0], // Change from default position
                    }),
                    fontSize: labelPosition.interpolate({
                        inputRange: [0, 1],
                        outputRange: [16, 12], // Adjust font size
                    }),
                }}
            >
                {label}
            </Animated.Text>
            <View className="py-2" />
            <TextInput
                className="border-b border-black text-lg"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onFocus={() => animateLabel(true)}
                onBlur={() => animateLabel(!!value)}
            />
        </View>
    )
}