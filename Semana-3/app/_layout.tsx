import { AppProvider } from "@/context/AppContext";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
    // return <Stack  /> // Stack con las opciones por default
    return <AppProvider>
        <Stack>
            <Stack.Screen
                name="index" // Nombre del archivo (sin .tsx)
                options={{ title: "Página de inicio", headerShown: false }}
            />
            <Stack.Screen
                name="about"
                options={{ title: "Acerca de la app", headerShown: false }}
            />
        </Stack>
    </AppProvider>
}
