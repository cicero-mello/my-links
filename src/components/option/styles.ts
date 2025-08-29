import { colors } from "@colors"
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    primaryTitle: {
        color: colors.green[300],
        fontSize: 16,
        fontWeight: "600"
    },
    secondaryTitle: {
        color: colors.gray[400],
        fontSize: 16,
    }
})
