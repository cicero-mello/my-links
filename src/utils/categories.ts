import { MaterialIcons } from "@expo/vector-icons"

export interface Category {
    id: string
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    { id: "1", name: "Course", icon: "code" },
    { id: "2", name: "Project", icon: "folder" },
    { id: "3", name: "Site", icon: "language" },
    { id: "4", name: "Article", icon: "newspaper" },
    { id: "5", name: "Movie", icon: "movie" },
    { id: "6", name: "Documentation", icon: "content-paste" }
]
