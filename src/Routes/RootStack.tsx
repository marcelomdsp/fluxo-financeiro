import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTitle: "Cadastre-se",
          headerTintColor: "#fff",
          headerBackTitle: 'Voltar',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
