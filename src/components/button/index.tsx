import { TouchableOpacity, Text } from "react-native"
import type { ButtonProps } from "./types"
import { styles } from "./styles"

export const Button = ({
    title, ...rest
}: ButtonProps) => {

    return (
        <TouchableOpacity
            style={styles.wrapper}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
