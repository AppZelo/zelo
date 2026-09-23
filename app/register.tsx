import { View, Text, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionDescription from "../components/SectionDescription"

export default function Register() {
    return (
        <View style={styles.container}>
            <BackHeader text="Cadastro de Perfil"></BackHeader>
            <SectionDescription title="Como deseja utilizar a plataforma?" description="Escolha a opção que melhor descreve você para iniciarmos."></SectionDescription>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flex: 1,
        width: "90%"
    },
})