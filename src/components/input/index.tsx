import { TextInput, type TextInputProps } from "react-native"
import { styles } from "./styles"
import { colors } from "@colors"

export const Input = (props: TextInputProps) => {

    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={colors.gray[400]}
            autoCorrect={false}
            {...props}
        />
    )
}
