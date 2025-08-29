import { MaterialIcons } from "@expo/vector-icons"
import type { TouchableOpacityProps } from "react-native"

export interface OptionProps extends TouchableOpacityProps {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary"
}
