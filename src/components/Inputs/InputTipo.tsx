import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

type Tipo = "entrada" | "saida";

export default function TipoTransacao() {
  const [tipo, setTipo] = useState<Tipo>("entrada");

  return (
    <>
      <Text style={styles.tipoLabel}>Tipo:</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={[
            styles.botao,
            tipo === "entrada" && styles.entradaAtiva,
          ]}
          onPress={() => setTipo("entrada")}
        >
          <Text style={styles.texto}>Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botao,
            tipo === "saida" && styles.saidaAtiva,
          ]}
          onPress={() => setTipo("saida")}
        >
          <Text style={styles.texto}>Saída</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  tipoLabel: {
    fontSize: 14,
    paddingVertical: 10,
    fontWeight: "bold",
    color: "#333",
  },
  botoes: {
    flexDirection: "row",
    gap: 10,
  },
  botao: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  entradaAtiva: {
    backgroundColor: "#26fa26",
  },
  saidaAtiva: {
    backgroundColor: "#fa4a4a",
  },
  texto: {
    fontWeight: "bold",
    color: "grey",
  },
});
