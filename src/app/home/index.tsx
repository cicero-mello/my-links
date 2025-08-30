import { Image, TouchableOpacity, View, FlatList, Modal, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Categories, Link, Option } from "@components"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@colors"
import { styles } from "./styles"
import { router } from "expo-router"
import logoSrc from "@assets/logo.png"
import { useState } from "react"
import { categories } from "@utils/categories"

const Home = () => {
    const [category, setCategory] = useState(categories[0].name)

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Image source={logoSrc} style={styles.logo} />
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Categories
                selectedCategory={category}
                onChangeCategory={setCategory}
            />

            <FlatList
                data={["1", "2"]}
                keyExtractor={(item) => item}
                style={styles.flatListLinks}
                contentContainerStyle={styles.flatListLinksContentContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ index }) => (
                    <Link
                        name="Portfolio"
                        url="https://ciceromello.com"
                        key={"home-link-" + index}
                    />
                )}
            />

            <Modal transparent={true} visible={false}>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                Projects
                            </Text>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name="close"
                                    size={20}
                                    color={colors.gray[400]}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            Portfolio
                        </Text>
                        <Text style={styles.modalUrl}>
                            https://www.ciceromello.com
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option name="Delete" icon="delete" variant="secondary" />
                            <Option name="Open" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Home
