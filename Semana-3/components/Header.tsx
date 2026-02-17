import { StyleSheet, Text } from "react-native";

// Interfaz
interface IHeader {
    children?: any
}

// Componente
export function Header(props : IHeader) {
    return <Text style={styles.header}>{props.children}</Text>
}

// Estilos
const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        margin: 10,
        textAlign: "center"
    }
})

