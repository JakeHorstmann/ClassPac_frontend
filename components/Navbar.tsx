import NavbarButton from "./NavbarButton"
import { View, Text } from 'react-native';
import { HomeIcon, ClassroomIcon, EventIcon, ReportIcon, AccountIcon } from "./svgs/index"

export default function Navbar() {
    return (
        <View className="align-bottom bg-zinc-600 px-4 pb-6">
            {/* <HomeIcon /> */}
            <View className="flex flex-row">
                <NavbarButton link="/" Icon={HomeIcon} />
                <NavbarButton link="/classrooms" Icon={ClassroomIcon} />
                <NavbarButton link="/event" Icon={EventIcon} />
                <NavbarButton link="/reports" Icon={ReportIcon} />
                <NavbarButton link="/account" Icon={AccountIcon} />
            </View>
        </View>
    );
}