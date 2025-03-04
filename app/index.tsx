import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const Start = () => {
        router.replace('/home')
    }
    return(
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <Text style={styles.h1}>Loja do fulano</Text>
            <Text style={styles.h2}>Aqui você encontra tudo que você precisa.</Text>
            <Button
                title="Começar as compras"
                onPress={Start}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h2: {
        fontSize: 16,
        marginBottom: 10,
    },
})