import { Image, TouchableOpacity, View, FlatList, Modal, Text, Alert, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { type LinkStored, linkStorage } from "@storage"
import { Categories, Link, Option } from "@components"
import { router, useFocusEffect } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { categories } from "@utils/categories"
import { useCallback, useState } from "react"
import { colors } from "@colors"
import { styles } from "@page-styles/home"
import logoSrc from "@assets/logo.png"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState(categories[0].name)
    const [links, setLinks] = useState<LinkStored[]>([])
    const [currentLink, setCurrentLink] = useState<LinkStored>()

    const updateLinks = useCallback(() => {
        const update = async () => {
            try {
                const userLinks = await linkStorage.get(category)
                setLinks(userLinks)
            } catch (error) {
                Alert.alert("Error", "Unable to load your saved links")
            }
        }
        update()
    }, [category])

    useFocusEffect(updateLinks)

    const handleDetails = (link: LinkStored) => {
        setShowModal(true)
        setCurrentLink(link)
    }

    const handleDeleteLink = () => {
        const deleteLink = async () => {
            try {
                if (!currentLink?.id) throw new Error("Missing link id")
                await linkStorage.remove(currentLink.id)
                updateLinks()
                setShowModal(false)
            } catch (error) {
                Alert.alert("Error", "Unable to remove link")
                console.error(error)
            }
        }

        Alert.alert("Remove", "Are you sure?", [
            { style: "cancel", text: "No" },
            { text: "Yes", onPress: deleteLink }
        ])
    }

    const handleOpenLink = async () => {
        try {
            if (!currentLink?.id) throw new Error("Missing link id")
            await Linking.openURL(currentLink?.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Error", "Unable to open link")
            console.error(error)
        }
    }

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
                data={links}
                keyExtractor={(link) => link.id}
                style={styles.flatListLinks}
                contentContainerStyle={styles.flatListLinksContentContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Link
                        name={item.name}
                        url={item.url}
                        key={"home-link-" + item.id}
                        onPressDetails={() => handleDetails(item)}
                    />
                )}
            />

            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
            >
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>
                                {category}
                            </Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons
                                    name="close"
                                    size={20}
                                    color={colors.gray[400]}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            {currentLink?.name ?? "mystic error"}
                        </Text>
                        <Text style={styles.modalUrl}>
                            {currentLink?.url ?? "mystic error"}
                        </Text>

                        <View style={styles.modalFooter}>
                            <Option
                                name="Delete"
                                icon="delete"
                                variant="secondary"
                                onPress={handleDeleteLink}
                            />
                            <Option
                                name="Open"
                                icon="language"
                                onPress={handleOpenLink}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Home
