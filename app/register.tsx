import { useState } from "react"
import { View, StyleSheet } from "react-native"
import BackHeader from "../components/BackHeader"
import SectionDescription from "../components/SectionDescription"
import SelectionCard from "../components/SelectionCard"
import AppButton from "../components/AppButton"

export default function Register() {
    const [selectedCard, setSelectedCard] = useState("patient")

    return (
        <View style={styles.container}>
            <BackHeader text="Cadastro de Perfil"></BackHeader>
            <View style={styles.content}>
                <SectionDescription title="Como deseja utilizar a plataforma?" description="Escolha a opção que melhor descreve você para iniciarmos."></SectionDescription>
                <View style={styles.cards}>
                    <SelectionCard 
                        title="Ser paciente" 
                        description="Desejo encontrar profissionais para cuidar da minha saúde em casa." 
                        selected={selectedCard === "patient"} 
                        onPress={() => setSelectedCard("patient")}
                    ></SelectionCard>
                    <SelectionCard 
                        title="Sou Familiar/Responsável" 
                        description="Quero contratar e acompanhar atendimentos para um familiar de minha responsabilidade." 
                        selected={selectedCard === "guardian"} 
                        onPress={() => setSelectedCard("guardian")}
                    ></SelectionCard>
                    <SelectionCard 
                        title="Sou Especialista da Saúde" 
                        description="Sou enfermeiro, fisio ou médico e quero oferecer meus serviços domiciliares." 
                        selected={selectedCard === "specialist"} 
                        onPress={() => setSelectedCard("specialist")}
                    ></SelectionCard>
                </View>
                <View style={styles.footer}>
                    <AppButton text="Continuar Cadastro"></AppButton>
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

    content: {
        flex: 1,
        gap: 12,
    },

    cards: {
        alignItems: "center",   
        flex: 1,
        gap: 12, 
    },

    footer: {
        paddingBottom: 70,
    },
})