import { colors } from "@colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    title: {
        color: colors.green[300],
        fontSize: 24
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 18,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    logo: {
        height: 32,
        width: 38
    },
    flatListLinks: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600]
    },
    flatListLinksContentContainer: {
        gap: 20,
        padding: 24,
        paddingBottom: 100
    },
    modalView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.86)"
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 32,
        padding: 24
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200]
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400]
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14
    }
})
