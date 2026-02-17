import { Etiqueta } from "@/components/Etiqueta"
import { Header } from "@/components/Header"
import { ScrollView, StyleSheet, View } from "react-native"

export default function About() {
    return (
        <ScrollView style={s.contenedor}>
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
                <Etiqueta>Regresar al inicio</Etiqueta>
            </View>
        </ScrollView>
    )
}

const s = StyleSheet.create({
    contenedor: {
        flexDirection: "column",
        gap: 80
    }
})
