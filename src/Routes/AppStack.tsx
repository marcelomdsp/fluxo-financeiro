import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import NovaTransacao from "../Pages/NovaTransacao";
import Transacoes from "../Pages/TransationsAll";
import Perfil from "../Pages/Perfil";
import { useTema } from "../Contexts/TemaContext";
const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const { tema } = useTema();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: tema.cores.destaque,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }
      }
      />

      <Stack.Screen
        name="NovaTransação"
        component={NovaTransacao}
        options={{
          headerStyle: {
            backgroundColor: tema.cores.destaque,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerStyle: {
            backgroundColor: tema.cores.destaque,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="Todas as Transações"
        component={Transacoes}
        options={{
          headerStyle: {
            backgroundColor: tema.cores.destaque,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
