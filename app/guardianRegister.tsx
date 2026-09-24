import { View, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionDescription from "../components/SectionDescription"
import { colors } from "../constants/colors"

export default function guardianRegister() {
    return(
        <View style={styles.container}>
            <BackHeader text="Dados do Responsável"></BackHeader>
            <SectionDescription title="Responsável Legal" description="Cadastre a pessoa de referência maior de 18 anos que responderá pelo paciente."></SectionDescription>
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