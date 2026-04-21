import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { criarEstilos } from "./styles";
import { useTema } from "../../Contexts/TemaContext";

type Props = {
  tipo: "categoria" | "modalidade" | "tipo";
  categorias: string[];
  onChange?: (value: string) => void;
};

export function CategoryDropdown({ categorias, tipo, onChange }: Props) {
  const { tema } = useTema();
  const styles = criarEstilos(tema);
  const alturaAnimada = useRef(new Animated.Value(0)).current;
  const [titulo, setTitulo] = useState("");
  const [aberto, setAberto] = useState(false);
  const altura = categorias.length * 40 > 200 ? 200 : categorias.length * 40;

  function abrir() {
    setAberto(true);
    Animated.timing(alturaAnimada, {
      toValue: altura,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  function fechar() {
    Animated.timing(alturaAnimada, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setAberto(false);
    });
  }

  function alternar() {
    aberto ? fechar() : abrir();
  }

  return (
   <>
  <Pressable style={styles.botao} onPress={alternar}>
    <Text style={styles.textoBotao}>
      {titulo ||
        (tipo === "categoria"
          ? "Categoria"
          : tipo === "modalidade"
          ? "Modalidade"
          : "Tipo")}
    </Text>
  </Pressable>

  {aberto && (
    <View style={styles.containerAbsoluto}>
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={fechar}>

      {/* Painel */}
      <Animated.View
        style={[
          styles.painel,
          {
            height: alturaAnimada,
          },
        ]}
      >
        <FlatList
          data={categorias}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable
              style={styles.item}
              onPress={() => {
                setTitulo(item);
                onChange?.(item);
                fechar();
              }}
            >
              <Text style={styles.textoPainel}>{item}</Text>
            </Pressable>
          )}
        />
      </Animated.View>
        </Pressable>
    </View>
  )}
</>

  );
}
