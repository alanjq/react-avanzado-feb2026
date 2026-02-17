import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import apiClima from '@/api/clima_monterrey.json'


export default function Home() {
    const [ciudad, setCiudad] = useState('-')
    const [temperatura, setTemperatura] = useState('-')
    const [velocidadViento, setVelocidadViento] = useState('-')
    
    useEffect(()=>{
        
        // Cargar la información
        setCiudad(apiClima.ciudad)
        setTemperatura(apiClima.temperatura)
        setVelocidadViento(apiClima.viento)
    }, [])
    
    return (
        <View style={styles.contenedor}>
            <ScrollView style={styles.arriba}>
                <Etiqueta>{ciudad}</Etiqueta>
                <Header>{temperatura}º</Header>
                <Etiqueta>Viento: {velocidadViento}</Etiqueta>
                {/* Imagen: Luna */}
                {/* <Image source={imgLuna} style={{ width: 30, alignSelf: 'center' }} /> */}
                {/* Imagen: Sol */}
                {/* <Image source={require('@/assets/imagenes/sol.webp')} style={{ width: "60%" }} /> */}
                {/* Modo oscuro/claro */}
            </ScrollView>
            <View style={styles.abajo}>
                <View style={{ backgroundColor: 'yellow' }}>
                    <Etiqueta alinear="left">Modo oscuro</Etiqueta>
                </View>
                <View style={{ backgroundColor: 'green' }}>
                    <Etiqueta href="/about" alinear="right">Acerca de esta app</Etiqueta>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        flexGrow: 1,
    },
    arriba: {
        flexGrow: 1,
        // flexDirection: 'column',
    },
    abajo: {
        gap: 10,
        bottom: 0,
        position: "sticky",
        flexDirection: "row",
    }
})
