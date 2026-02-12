import { Text, View } from "react-native";

// Aqui especificamos la estructura del componente
interface IComponenteGrados {
    value: number
}

export function ComponenteGrados(props : IComponenteGrados){
    return <View>
        <Text>{props.value}</Text>
    </View>
}