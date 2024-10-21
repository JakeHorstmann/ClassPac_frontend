import { Redirect, Tabs } from "expo-router"
import { useAuth } from "@/components/AuthProvider"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function AuthorizedTabsLayout() {
    const { user } = useAuth()

    if (!user) {
        return <Redirect href="/login" />
    }
    return (
        <Tabs screenOptions={{}}>
            <Tabs.Screen name="classrooms" options={{
                tabBarIcon: () => <FontAwesome className="text-text" name="users" size={24} /> //dashboard or graduation-cap could also work here
            }} />
            <Tabs.Screen name="event" options={{
                tabBarIcon: () => <FontAwesome className="text-text" name="pencil" size={24} />
            }} />
            <Tabs.Screen name="index" options={{
                tabBarIcon: () => <FontAwesome className="text-text" name="home" size={24} />
            }} />
            <Tabs.Screen name="reports" options={{
                tabBarIcon: () => <FontAwesome className="text-text" name="newspaper-o" size={24} />
            }} />
            <Tabs.Screen name="account" options={{
                tabBarIcon: () => <FontAwesome className="text-text" name="user" size={24} />
            }} />
        </Tabs>
    )
}