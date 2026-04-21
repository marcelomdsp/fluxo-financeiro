import {
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Platform,
} from "react-native";
import Input from "../../components/Inputs";
import { useState } from "react";
import { UseAuth } from "../../Contexts/Auth";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { cadastrar } = UseAuth();

  function cadastararUsuario() {
    cadastrar(nome, sobrenome, email, senha);
    setNome("");
    setSobrenome("");
    setEmail("");
    setSenha("");
    alert("Usuário cadastrado com sucesso!");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.cadastroContainer}>
        <Input
          placeholder="Nome"
          keyboardType="default"
          onChangeText={setNome}
          value={nome}
        />

        <Input
          placeholder="Sobrenome"
          keyboardType="default"
          onChangeText={setSobrenome}
          value={sobrenome}
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
          secureTextEntry={true}
          keyboardType="default"
          onChangeText={setSenha}
          value={senha}
        />

        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={cadastararUsuario}
        >
          <Text style={styles.botaoText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  cadastroContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingHorizontal: 40,
    gap: 10,
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
});
