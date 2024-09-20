import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllProducts } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen() {
    const products = getAllCategories();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CategoryItem data={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
});
