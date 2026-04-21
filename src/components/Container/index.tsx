import { useTema } from "../../Contexts/TemaContext";
import { View } from "react-native";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { tema } = useTema();

  return <View style={{ flex: 1, paddingHorizontal: tema.espacamento.sm, backgroundColor: tema.cores.primaria }}>{children}</View>;
}

export default Container;