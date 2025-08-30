import { FlatList } from "react-native"
import { styles } from "./styles"
import { Category } from "../category"
import { categories } from "@utils/categories"
import type { CategoriesProps } from "./types"

export const Categories = ({
    selectedCategory, onChangeCategory
}: CategoriesProps) => {

    return (
        <FlatList
            data={categories}
            keyExtractor={(category) => category.id}
            horizontal={true}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContentContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected={item.name === selectedCategory}
                    onPress={() => onChangeCategory(item.name)}
                />
            )}
        />
    )
}
