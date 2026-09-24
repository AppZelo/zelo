import { View, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionText from "../components/SectionText"
import { colors } from "../constants/colors"

export default function specialistRegister() {
    return(
        <View style={styles.container}>
            <BackHeader text="Cadastro de Especialista"></BackHeader>
            <SectionText 
                title="Dados Profissionais" 
                showDescription={true}
                description="Insira seus dados de registro para validação de segurança."
            ></SectionText>
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