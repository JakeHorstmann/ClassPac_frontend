import NavbarButton from "./NavbarButton"
import { View, Text } from 'react-native';

export default function Navbar() {
    return (
        <View className="flex flex-row bg-zinc-600 align-bottom">
            <NavbarButton link="/" test="home" />
            <NavbarButton link="/classrooms" test="classes" />
            <NavbarButton link="/event" test="events" />
            <NavbarButton link="/reports" test="reports" />
            <NavbarButton link="/options" test="options" />
        </View>
    );
}