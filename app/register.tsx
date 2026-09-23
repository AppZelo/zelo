import { View, Text, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionDescription from "../components/SectionDescription"
import SelectionCard from "../components/SelectionCard"

export default function Register() {
    return (
        <View style={styles.container}>
            <BackHeader text="Cadastro de Perfil"></BackHeader>
            <View style={styles.selectionGroup}>
                <SectionDescription title="Como deseja utilizar a plataforma?" description="Escolha a opção que melhor descreve você para iniciarmos."></SectionDescription>
                <View style={styles.cards}>
                    <SelectionCard title="Ser paciente" description="Desejo encontrar profissionais para cuidar da minha saúde em casa." selected={true}></SelectionCard>
                    <SelectionCard title="Sou Familiar/Responsável" description="Quero contratar e acompanhar atendimentos para um familiar de minha responsabilidade." selected={false}></SelectionCard>
                    <SelectionCard title="Sou Especialista da Saúde" description="Sou enfermeiro, fisio ou médico e quero oferecer meus serviços domiciliares." selected={false}></SelectionCard>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flex: 1,
        width: "90%"
    },

    selectionGroup: {
        gap: 20,
    },

    cards: {
        alignItems: "center",   
        gap: 16, 
    },
})