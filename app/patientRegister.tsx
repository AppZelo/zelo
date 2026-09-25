import { View, StyleSheet, ScrollView } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionText from "../components/SectionText"
import { colors } from "../constants/colors"
import AppInput from "../components/AppInput"

export default function patientRegister() {
    return(
        <View style={styles.container}>
            <BackHeader text="Dados do Paciente"></BackHeader>
            <ScrollView 
                contentContainerStyle={styles.scrollContent} 
                keyboardShouldPersistTaps="handled"
            >
                <SectionText 
                    title="Cadastro do Paciente" 
                    showDescription={true}
                    description="Adicione as informações do paciente que receberá os atendimentos."
                    titleStyle={{fontSize: 22}}
                ></SectionText>
                <AppInput 
                    labelText="Nome Completo" 
                    placeholder="Seu nome completo"
                ></AppInput>
                <View style={styles.row}>
                    <AppInput 
                        labelText="CPF" 
                        placeholder="000.000.000-00" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                    <AppInput 
                        labelText="Data de Nascimento" 
                        placeholder="DD/MM/AAAA" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                </View>
                {/* <AppInput labelText="Necessidade Especial/Deficiência"></AppInput> */}
                <View style={styles.row}>
                    <AppInput 
                        labelText="E-mail" 
                        placeholder="email@exemplo.com" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                    <AppInput 
                        labelText="Celular" 
                        placeholder="(XX) XXXXX-XXXX" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                </View>

                {/* Seção de dados do endereço */}
                <SectionText 
                    title="Endereço Residencial" 
                    titleStyle={{fontSize: 18}}
                ></SectionText>
                <AppInput
                    label={true}
                    labelText="CEP" 
                    placeholder="00000-000"
                ></AppInput>
                <View style={styles.row}>
                    <AppInput
                        label={true}
                        labelText="Rua/Avenida" 
                        containerStyle={{flex: 2}}
                    ></AppInput>
                    <AppInput
                        label={true}
                        labelText="Nº" 
                        containerStyle={{flex: 1}}
                    ></AppInput>
                </View>
                <AppInput
                    label={true}
                    labelText="Bairro" 
                ></AppInput>
                <AppInput
                    label={true}
                    labelText="Cidade/UF" 
                ></AppInput>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.white1,
        flex: 1,
        paddingBottom: 70,
        paddingHorizontal: "5%",
        width: "100%"
    },

    scrollContent: {
        gap: 20,
    },

    row: {
        flexDirection: "row",
        gap: 12,
    },
})