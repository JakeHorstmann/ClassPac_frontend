import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from "react-native"
import { useTheme } from '@react-navigation/native'

export default function TopUnsafeArea() {
    const insets = useSafeAreaInsets()
    const colors = useTheme()

    return (
        <View style=
            {{
                paddingTop: insets.top,
                backgroundColor: colors.colors.card
            }}
            className="bg-bg">
        </View>
    )
}
