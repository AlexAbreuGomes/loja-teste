import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: "Categorias",
                    tabBarIcon: ({ color }) => <FontAwesome name="archive" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre mim",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
                }}
            />
        </Tabs>
    );
}