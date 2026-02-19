import { AppContext } from "@/context/AppContext";
import { Link } from "expo-router";
import { useContext } from "react";
import { Text } from "react-native";

interface IEtiqueta {
    alinear?: string,
    href?: any,
    children?: any
}

export function Etiqueta(props: IEtiqueta) {
    // Usamos el contexto
    const context = useContext(AppContext)
    
    if (props.href) {
        return <Link href={props.href}>{props.children}</Link>
    }
    return <Text style={{
        padding: 10,
        // display: 'flex',
        textAlign: props.alinear || 'center',
        color: context.getTextColor()
    }}>{props.children}</Text>
}
