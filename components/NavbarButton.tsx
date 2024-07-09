import { Link } from 'expo-router';
import { View } from 'react-native';

type NavbarProps = {
    link: string
    test: string
    Icon: React.ElementType
}

export default function NavbarButton(props: NavbarProps) {
    return (
        <View className="flex pb-10 items-center justify-center basis-1/5">
            <Link className="text-white text-xl" href={props.link}>
                {props.link == "/" ? <props.Icon width="100px" height="100px" /> : props.test}
            </Link>
        </View>
    );
}