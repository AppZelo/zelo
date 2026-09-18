import { View, Text, StyleSheet, Pressable } from "react-native"
import { router } from "expo-router"
import { colors } from "../constants/colors"

export default function Register() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.back} onPress={() => {router.back()}}>
                    <Text style={styles.backIcon}>←</Text>
                </Pressable>
                <Text>Tela de cadastro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        paddingTop: 50,
    },

    header: {
        width: "90%",
    },

    back: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white2,
        borderColor: colors.gray1,
        borderRadius: "100%",
        borderWidth: 2,
        height: 48,
        width: 48,
    },

    backIcon: {
        fontSize: 24,
        fontWeight: "bold",
    },
})