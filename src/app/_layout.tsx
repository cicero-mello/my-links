import { Stack } from "expo-router"
import { colors } from "@colors"

const Layout = () => {

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: colors.gray[950]
                }
            }}
        />
    )
}

export default Layout
