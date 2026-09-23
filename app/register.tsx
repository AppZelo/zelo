import { View, Text, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"

export default function Register() {
    return (
        <View style={styles.container}>
            <BackHeader text="Cadastro de Perfil"></BackHeader>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        paddingTop: 50,
    },
})