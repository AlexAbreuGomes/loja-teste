import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack>
            <Stack.Screen name= "list" options={{title: 'Categorias', headerShown: false}}/>
            <Stack.Screen name= "[id]" options={{title: '', headerShown: false}}/>
        </Stack>
    )
}