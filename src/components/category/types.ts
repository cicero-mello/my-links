import { MaterialIcons } from "@expo/vector-icons"
import type { PressableProps } from "react-native"

export interface CategoryProps extends PressableProps {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    isSelected?: boolean
}
