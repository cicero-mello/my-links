import AsyncStorage from "@react-native-async-storage/async-storage"

const LINK_STORAGE_KEY = "my-links@links"

export interface LinkStored {
    id: string
    name: string
    url: string
    category: string
}

const get = async (categoryFilter?: string): Promise<LinkStored[]> => {
    const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY)
    const response: LinkStored[] = storage ? await JSON.parse(storage) : []

    return !categoryFilter ? response : response.filter(
        (link) => link.category === categoryFilter
    )
}

const save = async (newLink: LinkStored) => {
    const storage = await get()
    const updatedStorage = JSON.stringify([...storage, newLink])
    await AsyncStorage.setItem(LINK_STORAGE_KEY, updatedStorage)
}

const remove = async (id: string) => {
    const storage = await get()
    const filteredStorage = storage.filter((link) => link.id != id)
    await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(filteredStorage))
}

export const linkStorage = {
    get, save, remove
}
