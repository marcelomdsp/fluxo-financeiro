import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image} from "react-native";
import Container from "../../components/Container";
import { UseAuth } from "../../Contexts/Auth";
import { useTema } from "../../Contexts/TemaContext";
import { criarEstilos } from "./styles";
import Opcoes from "../../components/Opcoes/Opcoes";

const dadosOpcao = ["Tema", "Editar Perfil", "Configurações", "Sair"];

const Perfil = () => {
  const { tema } = useTema();
  const styles = criarEstilos(tema);

  const { userDoc } = UseAuth() as {
    userDoc: { nome: string; sobrenome: string; email: string } | null;
  };
  const { logout } = UseAuth() as { logout: () => void };

  return (
    <Container>
      <View style={styles.areaImg}>
        <TouchableOpacity style={styles.btnEditImg} onPress={() => {}}>
          <Image
            style={styles.perfilImg}
            source={require("../../../assets/perfil.png")}
          />
        </TouchableOpacity>
        <Text style={styles.nomeText}>
          {userDoc?.nome}Marcelo Santos {userDoc?.sobrenome}
        </Text>
        <Text style={styles.emailText}>asshdgshdadhashd{userDoc?.email}</Text>
      </View>
      <SafeAreaView style={styles.opcoesContainer}>
        {dadosOpcao.map((opcao, index) => (
          <Opcoes
            key={index}
            titulo={opcao}
            onPress={opcao === "Sair" ? logout : () => {}}
          />
        ))}
      </SafeAreaView>
    </Container>
  );
};

export default Perfil;
