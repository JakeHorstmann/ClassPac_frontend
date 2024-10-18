import { Redirect, Tabs } from "expo-router"
import { useAuth } from "@/components/AuthProvider"

export default function AuthorizedTabsLayout() {
    const { user } = useAuth()
    if (!user) {
        return <Redirect href="/login" />
    }
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen name="classrooms" />
            <Tabs.Screen name="event" />
            <Tabs.Screen name="index" options={{ title: "HOME" }} />
            <Tabs.Screen name="reports" />
        </Tabs>
    )
}