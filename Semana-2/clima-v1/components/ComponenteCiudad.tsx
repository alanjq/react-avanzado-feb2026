import { Text, View } from "react-native";

interface IComponenteCiudad {
    name: string
}

export function ComponenteCiudad(props : IComponenteCiudad) {
    return <View>
        <Text>{props.name}</Text>
    </View>
}
