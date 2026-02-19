import { Etiqueta } from "@/components/Etiqueta"
import { Header } from "@/components/Header"
import { AppContext } from "@/context/AppContext"
import { Link } from "expo-router"
import { useContext } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function About() {
    const context = useContext(AppContext)

    const s = StyleSheet.create({
        contenedor: {
            flexDirection: "column",
            gap: 80,
            backgroundColor: context.getBgColor(),
            height: "100%"
        }
    })


    return (
        <SafeAreaView style={s.contenedor}>
            <ScrollView>
                <View>
                    <Header>Acerca de</Header>
                </View>
                <View>
                    <Etiqueta>Mi App de Clima</Etiqueta>
                </View>
                <View>
                    <Etiqueta>Desarrollado usando Expo + React Native</Etiqueta>
                </View>
                <View>
                    <Etiqueta>Desarrollador:</Etiqueta>
                    <Etiqueta>Alan Jiménez</Etiqueta>
                </View>

                <View>
                    <Link href="/" style={{color: context.getTextColor()}}>Regresar al inicio</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
