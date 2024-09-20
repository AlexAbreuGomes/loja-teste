import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllProducts, getProductById, getProductsByCategory } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { getAllCategories, getCategoriesById } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";
import { router, Stack, useLocalSearchParams } from "expo-router";

export default function Screen() {
    const {id} =  useLocalSearchParams();
    const idCategory = parseInt (id as string);
    const category = getCategoriesById(idCategory);
    if(!category){
        return router.back
    }

    const products = getProductsByCategory(idCategory)

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: category.title}}/>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
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
