import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/Routes";
import { AuthProvider } from "./src/Contexts/Auth";
import { ModalProvider } from "./src/Contexts/Modal";
import { TemaProvider, useTema } from "./src/Contexts/TemaContext";

function AppContent() {
  const { tema } = useTema();

  return (
    <>
      <StatusBar
        backgroundColor={tema.cores.destaque}
        barStyle={"light-content"}
      />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <TemaProvider>
          <AppContent />
        </TemaProvider>
      </ModalProvider>
    </AuthProvider>
  );
}
