import { Link } from 'expo-router';
import { View } from 'react-native';

type NavbarProps = {
    link: string
    Icon: React.ElementType
}

export default function NavbarButton(props: NavbarProps) {
    return (
        <View className="flex items-center justify-center basis-1/5">
            <Link className="text-white text-xl" href={props.link}>
                <props.Icon className="aspect-square" width="80px" height="80px" />
            </Link>
        </View>
    );
}