import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export function Saludo() {
    const [nombre, setNombre] = useState('.')
    
    console.log("nombre", nombre)

    function actualizarComponente() {
        // Esto lo va a ciclar
        // setNombre('Alan')
        console.log("El componente se actualizó", nombre)
    }

    console.log(":: DENTRO CODIGO :: Este es el componente SALUDO.tsx")
    // Montaje (renderizado)
    useEffect(() => {
        console.log("::Saludo.tsxt: se montó el componente")
    },
        // La razón por la que se actualice el componente
        [])
        
    // Actualizar después de 1 segundo
    setTimeout(()=>{
        setNombre('Alan')
    }, 1000)


    // Actualización
    useEffect(actualizarComponente, [nombre])

    // Actualización (rerenderizado)
    // Limpieza (al actualizar el estado)
    // Desmontaje

    return <View>
        <Text>Hola </Text>
    </View>
}
