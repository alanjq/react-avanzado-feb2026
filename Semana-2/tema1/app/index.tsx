import { Saludo } from "@/components/Saludo";
import { Tabs } from "@/components/Tabs";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edita el archivo app/index.tsx para ver los cambios en esta pantalla.</Text>
      
      {/* Llamamos al componente Saludo */}
      <Saludo />
      
      <Text>
        ----- Este es el final del documento. -----
      </Text>
      
      <Tabs />
    </View>
  );
}
