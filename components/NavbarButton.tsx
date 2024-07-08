import { Link } from 'expo-router';
import { View } from 'react-native';

type NavbarProps = {
    link: string
    test: string
}

export default function NavbarButton(props: NavbarProps) {
    return (
        <View className="bg-inherit items-center justify-center basis-1/5">
            <Link className="text-white text-xl" href={props.link}>{props.test}</Link>
        </View>
    );
}