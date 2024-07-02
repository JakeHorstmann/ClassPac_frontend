import { Text } from 'react-native';

import Header from '../components/Header'
import Navbar from '../components/Navbar'

import "../styles/global.css"

export default function RootLayout() {
    return (
        <>
            <Header />
            <Text>This is the home screen content</Text>
            <Navbar />
        </>
    );
}