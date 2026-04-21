import { useNavigation } from "@react-navigation/native";
import { UseAuth } from "../../Contexts/Auth";
import { useState } from "react";
import {
  Text,
  Keyboard,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
} from "react-native";
import Input from "../../components/Inputs";
import ModalReset from "../../components/ModalReset";

export default function Login() {
  const navigation = useNavigation();
  const { login } = UseAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  function logar() {
    Keyboard.dismiss();
    login(email, senha);
    setSenha("");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.loginContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/perfil.png")}
        />

        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          inputMode="email"
        />

        <Input
          placeholder="Senha"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
        />

        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => logar()}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={styles.registroBotao}
          onPress={() => navigation.navigate("Cadastro" as never)}
        >
          <Text style={styles.registroBotaoText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registroBotao}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.registroBotaoText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        </View>
        <ModalReset visible={isModalVisible} onPress={() => setIsModalVisible(false)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingHorizontal: 40,
    gap: 15,
  },

  logo: {
    width: 150,
    height: 150,
  },

  input: {
    width: 300,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  botao: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 5,
  },

  botaoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  registroBotao: {
    marginTop: 10,
  },

  registroBotaoText: {
    color: "#171717",
    fontSize: 16,
    fontWeight: "bold",
  },
});
