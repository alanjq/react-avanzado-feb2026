import apiClima from '@/api/clima_monterrey.json';
import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Header";
import { AppContext } from '@/context/AppContext';
import { Link } from 'expo-router';
import { useContext, useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const context = useContext(AppContext)
  console.log('Modo actual:', context)

  const [ciudad, setCiudad] = useState('-')
  const [temperatura, setTemperatura] = useState('-')
  const [velocidadViento, setVelocidadViento] = useState('-')

  useEffect(() => {
    // Cargar la información
    setCiudad(apiClima.ciudad)
    setTemperatura(apiClima.temperatura)
    setVelocidadViento(apiClima.viento)
  }, [])


  const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      flexGrow: 1,
      backgroundColor: context.getBgColor(),
      color: context.getTextColor()
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


  return (
    <SafeAreaView style={styles.contenedor}>
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
          <Button title="Modo oscuro" onPress={context.toggleModo} />
        </View>
        <View style={{ backgroundColor: 'green' }}>
          <Link href="/about">Acerca de esta App</Link>
        </View>
      </View>
    </SafeAreaView>
  )
}
