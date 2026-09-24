import { View, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionDescription from "../components/SectionDescription"
import { colors } from "../constants/colors"

export default function patientRegister() {
    return(
        <View style={styles.container}>
            <BackHeader text="Dados do Paciente"></BackHeader>
            <SectionDescription title="Cadastro do Paciente" description="Adicione as informações do paciente que receberá os atendimentos."></SectionDescription>
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