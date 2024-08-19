import { Link } from 'expo-router'
import { Pressable, View } from 'react-native'
import React, { forwardRef } from 'react'

type NavbarProps = {
    link: string
    Icon: React.ElementType
}

const NavbarButton = forwardRef<View, NavbarProps>(({ link, Icon }, ref) => {
    return (
        <View ref={ref} className="flex items-center justify-center basis-1/5 aspect-square">
            <Link href={link} className="h-full w-full" asChild>
                <Pressable>
                    <View className="h-full w-full">
                        <Icon width="100%" height="100%" preserveAspectRatio="xMinYMin slice" />
                    </View>
                </Pressable>
            </Link>
        </View>
    );
});

export default NavbarButton;