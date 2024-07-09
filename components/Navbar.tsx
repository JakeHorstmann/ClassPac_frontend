import NavbarButton from "./NavbarButton"
import { View, Text } from 'react-native';
import HomeIcon from "./svgs/HomepageIcon"

export default function Navbar() {
    return (
        <View className="align-bottom bg-zinc-600">

            <View className="flex flex-row">
                <NavbarButton link="/" test="home" Icon={HomeIcon} />
                <NavbarButton link="/classrooms" test="classes" Icon={HomeIcon} />
                <NavbarButton link="/event" test="events" Icon={HomeIcon} />
                <NavbarButton link="/reports" test="reports" Icon={HomeIcon} />
                <NavbarButton link="/account" test="account" Icon={HomeIcon} />
            </View>
            <View className="pb-4" />
        </View>
    );
}