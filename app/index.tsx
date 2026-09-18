import { View, Text, StyleSheet, TextInput, Pressable } from "react-native"
import { colors } from "../constants/colors"

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>ZELO</Text>
                    <Text style={styles.subtitle}>Conforto e cuidado para você.</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>CPF ou E-mail</Text>
                        <TextInput 
                            placeholder="Ex.: 123.456.789-00"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput 
                            placeholder="Digite sua senha"
                            style={styles.input}
                            secureTextEntry
                        />

                        <Pressable style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                        </Pressable>
                    </View>

                </View>

            </View>

            <View style={styles.footer}>
                <View style={styles.buttonGroup}>
                    <Pressable style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </Pressable>

                    <View style={styles.divider}></View>

                    <Text style={{textAlign: "center", fontSize: 16}}>Novo por aqui?</Text>

                    <Pressable style={styles.signupButton}>
                        <Text style={styles.signupButtonText}>Criar conta</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white1,
        flex: 1,
        paddingTop: 100,
    },
    
    content: {
        flex: 1,
        gap: 25,
    },

    header: {
        alignItems: "center",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 16,
        fontWeight: "semibold"
    },
    
    form: {
        alignItems: "center",
        gap: 15,
        width: "100%",
    },

    inputGroup: {
        gap: 5,
        width: "80%",
    },

    label: {
        alignSelf: "flex-start",
        fontSize: 16,
        fontWeight: "bold",
    },

    input: {
        backgroundColor: colors.white2,
        borderColor: colors.gray1,
        borderRadius: 12,
        borderWidth: 2,
        height: 50,
        paddingLeft: 10,
        width: "100%",
    },

    forgotPassword: {
        marginTop: 20,
    },

    forgotPasswordText: {
        color: colors.blue1,
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },

    footer: {
        alignItems: "center",
        paddingBottom: 70,
        width: "100%",
    },
    
    buttonGroup: {
        gap: 10,
        width: "80%",
    },

    loginButton: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.blue1,
        borderRadius: 12,
        height: 56,
        justifyContent: "center",
        width: "100%",
    },

    loginButtonText: {
        color: colors.white2,
        fontSize: 18,
        fontWeight: "bold"
    },

    divider: {
        backgroundColor: colors.gray1,
        height: 1,
        margin: 3,
        width: "100%",
    },

    signupButton: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: colors.white2,
        borderColor: colors.gray1,
        borderRadius: 12,
        borderWidth: 2,
        height: 56,
        justifyContent: "center",
        width: "100%",
    },

    signupButtonText: {
        color: colors.blue1,
        fontSize: 18,
        fontWeight: "bold"
    },
})