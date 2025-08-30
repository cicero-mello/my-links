import { StyleSheet } from "react-native"
import { colors } from "@colors"

export const styles = StyleSheet.create({
    input: {
        height: 52,
        width: "100%",
        backgroundColor: colors.gray[900],
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray[800],
        padding: 10,
        color: colors.gray[100],
        fontSize: 16
    }
})
