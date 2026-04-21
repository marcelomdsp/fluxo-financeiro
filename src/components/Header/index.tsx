import { View, Text, Image, TouchableOpacity } from "react-native";
import { criarEstilos } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { UseAuth } from "../../Contexts/Auth";
import { useTema } from "../../Contexts/TemaContext";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const {userDoc} = UseAuth() as {userDoc: {nome: string} | null};
  const { tema } = useTema();
  const styles = criarEstilos(tema);
  

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
     
      <TouchableOpacity style={styles.perfil} onPress={() => navigation.navigate("Perfil" as never)}>
        <Image
          style={styles.imagem}
          source={require("../../../assets/perfil.png")}
        />
        
        <View style={styles.nomeContainer}>
            <View>
              <Text style={styles.nome}>Olá, {userDoc?.nome}</Text>
              <Text style={styles.saudacao}>Seja bem-vindo!</Text>
            </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          height: 40,
        }}
      >
      </View>
    </SafeAreaView>
  );
}

export default Header;
