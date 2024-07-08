import { View, Text } from 'react-native'
import { Slot } from 'expo-router'

import Header from '../components/Header'
import Navbar from '../components/Navbar'

import "../styles/global.css"

export default function RootLayout() {
    return (
        <View className="flex basis-full flex-col justify-between">
            <Header />
            <Slot />
            <Navbar />
        </View>
    );
}