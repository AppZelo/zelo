import { View, Text, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

type SectionTextProps = {
    title: string,
    showDescription?: boolean,
    description?: string,
}

export default function SectionText({
    title,
    showDescription = false,
    description,
}: SectionTextProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {showDescription && <Text style={styles.description}>{description}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 4,
    },

    title: {
        color: colors.blue1,
        fontSize: 24,
        fontWeight: "bold",
    },

    description: {
        color: colors.gray2,
        fontSize: 14,
    }
})