import { FlatList } from "react-native"
import { styles } from "./styles"
import { Category } from "../category"
import { categories } from "@utils/categories"

export const Categories = () => {

    return (
        <FlatList
            data={categories}
            keyExtractor={(category) => category.id}
            renderItem={({ item }) => <Category {...item} />}
            horizontal={true}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContentContainer}
            showsHorizontalScrollIndicator={false}
        />
    )
}
