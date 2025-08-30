import { StyleSheet } from "react-native"
import { colors } from "@colors"

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 18,
        marginBottom: 24
    },
    title: {
        color: colors.gray[200],
        fontSize: 24,
        fontWeight: "600"
    },
    label: {
        color: colors.gray[400],
        fontSize: 14,
        paddingHorizontal: 24
    },
    form: {
        padding: 24,
        gap: 16
    }
})
