import { ComponenteCiudad } from "@/components/ComponenteCiudad";
import { ComponenteGrados } from "@/components/ComponenteGrados";
import { View } from "react-native";

export function HomeView(){
    return <View>
        <ComponenteCiudad name="Cancún" />
        <ComponenteGrados value={30} />
    </View>
}
