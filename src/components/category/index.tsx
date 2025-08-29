import { Pressable, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import type { CategoryProps } from "./types"
import { colors } from "@colors"
import { styles } from "./styles"

export const Category = ({
    name, icon, style, isSelected,
    ...rest
}: CategoryProps) => {

    const color = isSelected ? colors.green[300] : colors.gray[400]

    return (
        <Pressable style={style ?? styles.wrapper} {...rest}>
            <MaterialIcons
                name={icon}
                size={16}
                color={color}
            />
            <Text style={[styles.name, { color }]}>
                {name}
            </Text>
        </Pressable>
    )
}
