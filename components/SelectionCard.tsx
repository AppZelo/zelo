import { View, Text, Pressable, StyleSheet } from "react-native"
import { colors } from "../constants/colors"

type SelectionCardProps = {
    title: string,
    description: string,
}

export default function SelectionCard({
    // icon,
    title,
    description,
}: SelectionCardProps) {
    return (
        <Pressable style={styles.card}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>Icon</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.radioOuter}>
                <View style={styles.radioInner}></View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        backgroundColor: colors.white2,
        borderColor: colors.gray1,
        borderRadius: 16,
        borderWidth: 3,
        flexDirection: "row",
        gap: 15,
        height: 113,
        padding: 18,
        width: "100%",
    },

    iconContainer: {
        alignItems: "center",
        backgroundColor: colors.gray1,
        borderRadius: 26,
        height: 52,
        justifyContent: "center",
        width: 52,
    },

    icon: {
        color: colors.gray2,
        fontWeight: "bold"
    },

    textContainer: {
        flex: 1,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },

    description: {
        color: colors.gray2,
        fontSize: 14,
    },

    radioOuter: {
        width: 22,
        height: 22,
        borderColor: colors.gray1,
        borderRadius: 11,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
})