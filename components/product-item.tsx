import { Product } from "../types/product";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

type Props = {
    data: Product
}

export const ProductItem = ({data}: Props) => {
    return (
        <Link href={`/product/${data.id}`} asChild>
        <Pressable style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: data.image}}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
            </View>
        </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#CCCCCC',
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#CCCCCC',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 13,
        color: '#555555',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
    }
})