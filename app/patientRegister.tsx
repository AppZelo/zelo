import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionText from "../components/SectionText"
import { colors } from "../constants/colors"
import AppInput from "../components/AppInput"
import AppButton from "../components/AppButton"

export default function patientRegister() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <BackHeader text="Dados do Paciente"></BackHeader>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >

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
                        showLabel
                        label="Nome Completo" 
                        placeholder="Seu nome completo"
                    ></AppInput>
                    <View style={styles.row}>
                        <AppInput 
                            showLabel
                            label="CPF" 
                            placeholder="000.000.000-00" 
                            containerStyle={{flex: 1}}
                        ></AppInput>
                        <AppInput 
                            showLabel
                            label="Data de Nascimento" 
                            placeholder="DD/MM/AAAA" 
                            containerStyle={{flex: 1}}
                        ></AppInput>
                    </View>
                    {/* <AppInput showLabel label="Necessidade Especial/Deficiência"></AppInput> */}
                    <View style={styles.row}>
                        <AppInput 
                            showLabel
                            label="E-mail" 
                            placeholder="email@exemplo.com" 
                            containerStyle={{flex: 1}}
                        ></AppInput>
                        <AppInput 
                            showLabel
                            label="Celular" 
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
                        showLabel
                        label="CEP" 
                        placeholder="00000-000"
                    ></AppInput>
                    <View style={styles.row}>
                        <AppInput
                            showLabel
                            label="Rua/Avenida" 
                            containerStyle={{flex: 2}}
                        ></AppInput>
                        <AppInput
                            showLabel
                            label="Nº" 
                            containerStyle={{flex: 1}}
                        ></AppInput>
                    </View>
                    <AppInput
                        showLabel
                        label="Bairro" 
                    ></AppInput>
                    <AppInput
                        showLabel
                        label="Cidade/UF" 
                    ></AppInput>
                    <AppButton text="Salvar e Continuar"></AppButton>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.white1,
        flex: 1,
        paddingBottom: 70,
        width: "100%"
    },

    header: {
        paddingHorizontal: "5%",
    },

    scrollContent: {
        gap: 20,
        paddingHorizontal: "5%",
    },

    row: {
        flexDirection: "row",
        gap: 12,
    },
})