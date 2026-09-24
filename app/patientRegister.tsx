import { View, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionText from "../components/SectionText"
import { colors } from "../constants/colors"
import AppInput from "../components/AppInput"

export default function patientRegister() {
    return(
        <View style={styles.container}>
            <BackHeader text="Dados do Paciente"></BackHeader>
            <View style={styles.content}>
                <SectionText 
                    title="Cadastro do Paciente" 
                    showDescription={true}
                    description="Adicione as informações do paciente que receberá os atendimentos."
                ></SectionText>
                <AppInput 
                    labelText="Nome Completo" 
                    placeholder="Maria das Dores Oliveira"
                ></AppInput>
                <View style={styles.row}>
                    <AppInput 
                        labelText="CPF" 
                        placeholder="123.456.789-00" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                    <AppInput 
                        labelText="Data de Nascimento" 
                        placeholder="12/03/1987" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                </View>
                {/* <AppInput labelText="Necessidade Especial/Deficiência"></AppInput> */}
                <View style={styles.row}>
                    <AppInput 
                        labelText="E-mail" 
                        placeholder="paciente@email.com" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                    <AppInput 
                        labelText="Celular" 
                        placeholder="(11) 99999-9999" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                </View>
            </View>
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

    content: {
        gap: 20,
    },

    row: {
        flexDirection: "row",
        gap: 12,
    },
})