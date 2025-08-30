import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { colors } from "@colors"
import type { OptionProps } from "./types"
import { MaterialIcons } from "@expo/vector-icons"

export const Option = ({
    name, icon, variant = "primary",
    ...rest
}: OptionProps) => {

    return (
        <TouchableOpacity style={styles.wrapper} {...rest}>
            <MaterialIcons
                name={icon}
                size={20}
                color={variant === "primary" ? colors.green[300] : colors.gray[400]}
            />
            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}
