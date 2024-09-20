import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
    title: string
    onPress: () => void
}

export const Button = ({title, onPress}: Props) => {
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#164e85',
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
})