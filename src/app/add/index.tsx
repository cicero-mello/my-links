import { SafeAreaView } from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { Button, Categories, Input } from "@components"
import { router } from "expo-router"
import { styles } from "./styles"
import { colors } from "@colors"
import { useState } from "react"

const Add = () => {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const isSomeInputInvalid = () => {
        if (!category) {
            Alert.alert("Wait, wait, wait...", "First, select a category.")
            return true
        }
        if (!name.trim()) {
            Alert.alert("You forgot something...", "Write a valid name for your link.")
            return true
        }
        if (!url.trim()) {
            Alert.alert("Just one more step:", "Paste your URL")
            return true
        }
        return false
    }

    const handleAdd = () => {
        if (isSomeInputInvalid()) return
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>
                    New
                </Text>
            </View>

            <Text style={styles.label}>
                Select a category:
            </Text>
            <Categories selectedCategory={category} onChangeCategory={setCategory} />

            <View style={styles.form}>
                <Input placeholder="Name" onChangeText={setName} />
                <Input placeholder="URL" onChangeText={setUrl} />
                <Button title="Add" onPress={handleAdd} />
            </View>
        </SafeAreaView>
    )
}

export default Add
