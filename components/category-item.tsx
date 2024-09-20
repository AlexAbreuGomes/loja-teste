import { Category } from "../types/category"
import { data } from "../data"
import { Image, Pressable, Text, StyleSheet, View } from "react-native"
import { router } from "expo-router"


type Props = {
    data: Category
}

export const CategoryItem = ({data}: Props)=>{
    const click = ()=>{
        router.navigate(`/categories/${data.id}`)
    }
    return(
        <Pressable style={styles.container} onPress={click}>
           <Image
            style={styles.image}
            source={{uri:data.cover}}
            resizeMode="cover"
           />
           <View style={styles.bg}></View>
           <View style={styles.box}>
            <Text style={styles.title}> {data.title} </Text>
           </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 10 
    },

    image:{
        width:'100%',
        height: 150,
        borderRadius: 10,
        opacity: 0.8
    },

    bg:{
        height:150,
        borderRadius: 10,
        backgroundColor: 'black',
        opacity: 0.6,
        marginTop: -150,
    },

    box:{
        height:150,
        marginTop:-150,
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center"
    },

    title:{
        color:'white',
        fontSize: 18
    }
})