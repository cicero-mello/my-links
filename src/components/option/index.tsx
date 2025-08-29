import { Text, TouchableOpacity } from "react-native"
import { style } from "./styles"
import { colors } from "@colors"
import { OptionProps } from "./types"
import { MaterialIcons } from "@expo/vector-icons"

export const Option = ({
    name, icon, variant = "primary",
    ...rest
}: OptionProps) => {

    return (
        <TouchableOpacity style={style.wrapper} {...rest}>
            <MaterialIcons
                name={icon}
                size={20}
                color={variant === "primary" ? colors.green[300] : colors.gray[400]}
            />
            <Text style={variant === "primary" ? style.primaryTitle : style.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}
