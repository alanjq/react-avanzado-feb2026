import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";

// Interfaz
interface IHeader {
    children?: any,
    modoOscuro?: boolean
}

// Componente
export function Header(props: IHeader) {
    // Consumir el contexto de la aplicación
    const context = useContext(AppContext)
    
    return <Text style={{
        fontSize: 50,
        margin: 10,
        textAlign: "center",
        color: context.getTextColor()
    }}>{props.children}</Text>
}
