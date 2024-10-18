import { View, Text, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function HomeScreen() {
    const router = useRouter()

    return (
        <View>
            <Text className='text-2xl bg-slate-300'>This is the home screen</Text>
            <Button title="test2" onPress={() => router.push('/details')} />
        </View>
    )
}