import { View, Text, Button } from 'react-native'
import { useRouter } from 'expo-router'
import TopUnsafeArea from '@/components/TopUnsafeArea'

export default function HomeScreen() {
    const router = useRouter()

    return (
        <View>
            <TopUnsafeArea />
            <Text className='text-2xl bg-slate-300'>This is the home screen</Text>
            <Button title="test2" onPress={() => router.push('/details')} />
        </View>
    )
}