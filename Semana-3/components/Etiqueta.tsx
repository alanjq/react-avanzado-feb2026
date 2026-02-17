import { Link } from "expo-router";
import { Text } from "react-native";

interface IEtiqueta {
    alinear?: string,
    href?: any,
    children?: any
}

export function Etiqueta(props: IEtiqueta) {
    if (props.href) {
        return <Link href={props.href}>{props.children}</Link>
    }
    return <Text style={{
        padding: 10,
        // display: 'flex',
        textAlign: props.alinear || 'center'
    }}>{props.children}</Text>
}
