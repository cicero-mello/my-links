import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { colors } from "@colors"
import type { LinkProps } from "./types"

export const Link = ({
    name, url, onPressDetails
}: LinkProps) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
                <Text style={styles.url} numberOfLines={1}>
                    {url}
                </Text>
            </View>
            <TouchableOpacity onPress={onPressDetails}>
                <MaterialIcons
                    name="more-horiz"
                    size={20}
                    color={colors.gray[400]}
                />
            </TouchableOpacity>
        </View>
    )
}
