import { useState, useRef } from "react"
import {
  TextInput,
  StyleSheet,
  Animated,
  View,
  Text,
  TextInputProps,
} from "react-native"

type StyledInputTextProps = TextInputProps & {
  placeholder: string
  value: string
}

export default function StyledInputText({
  placeholder,
  value,
  ...props
}: StyledInputTextProps) {
  const [isFocused, setIsFocused] = useState(false)
  const animatedLabel = useRef(new Animated.Value(0)).current

  const handleFocus = () => {
    setIsFocused(true)
    Animated.timing(animatedLabel, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false)
      Animated.timing(animatedLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start()
    }
  }

  return (
    <View className="p-1 border-solid border border-gray-200 rounded-lg">
      <Animated.View
        className="bg-blue-200"
        style={[
          {
            top: animatedLabel.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -10],
            }),
          },
        ]}
      >
        <Text>{placeholder}</Text>
      </Animated.View>
      <TextInput
        className="top-0"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  )
}
