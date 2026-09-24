import { View, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionDescription from "../components/SectionDescription"
import { colors } from "../constants/colors"

export default function specialistRegister() {
    return(
        <View style={styles.container}>
            <BackHeader text="Cadastro de Especialista"></BackHeader>
            <SectionDescription title="Dados Profissionais" description="Insira seus dados de registro para validação de segurança."></SectionDescription>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.white1,
        flex: 1,
        paddingHorizontal: "5%",
        width: "100%"
    },
})