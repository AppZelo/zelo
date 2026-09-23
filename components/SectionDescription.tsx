import { View, Text, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

type SectionDescriptionProps = {
    title: string,
    description: string,
}

export default function SectionDescription({
    title,
    description,
}: SectionDescriptionProps) {
    return (
        <View style={styles.descriptionGroup}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    descriptionGroup: {
        gap: 8,
    },

    title: {
        color: colors.blue1,
        fontSize: 24,
        fontWeight: "bold",
    },

    description: {
        fontSize: 16,
    }
})