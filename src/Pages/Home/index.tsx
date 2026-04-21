import { View, Pressable, Text, TouchableOpacity } from "react-native";
import { criarEstilos } from "./styles";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Transacoes from "../../components/Transacoes";
import { useNavigation } from "@react-navigation/native";
import { useTema } from "../../Contexts/TemaContext";

const Home = () => {
  const navigation = useNavigation();
  const { tema } = useTema();
  const styles = criarEstilos(tema);
  return (
    <>
      <Header />
      <Container>
        <View style={styles.areaSaldo}>
          <View style={{}}>
            <Text style={styles.textSaldo}>SALDO</Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: tema.cores.texto,
              }}
            >
              R$ 1.000,00
            </Text>
          </View>
        </View>

        <View style={styles.areaEntradasSaidas}>
          <View style={styles.entradaSaida}>
            <Text style={styles.textEntrada}>ENTRADA</Text>
            <Text
              style={{
                fontSize: tema.fonte.tamanho.md,
                fontWeight: "bold",
                color: tema.cores.texto,
              }}
            >
              R$ 5.000,00
            </Text>
          </View>

          <View style={styles.entradaSaida}>
            <Text style={styles.textSaida}>SAÍDA</Text>
            <Text
              style={{
                fontSize: tema.fonte.tamanho.md,
                fontWeight: "bold",
                color: tema.cores.texto,
              }}
            >
              R$ 4.000,00
            </Text>
          </View>
        </View>

        <View style={styles.areaBotoes}>
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("NovaTransação" as never)}
            >
              <Text style={styles.textButton}>+</Text>
            </Pressable>
            <Text style={styles.textB}>Nova</Text>
            <Text style={styles.textB}>Transação</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("NovaTransação" as never)}
            >
              <Text style={styles.textButton}>+</Text>
            </Pressable>
            <Text style={styles.textB}>Nova</Text>
            <Text style={styles.textB}>Transação</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("NovaTransação" as never)}
            >
              <Text style={styles.textButton}>+</Text>
            </Pressable>
            <Text style={styles.textB}>Nova</Text>
            <Text style={styles.textB}>Transação</Text>
          </View>
        </View>

        <View style={styles.areaTitulo}>
          <Text style={styles.titulo}>Transações Recentes</Text>
          <TouchableOpacity
            style={styles.TodasButton}
            onPress={() => navigation.navigate("Todas as Transações" as never)}
          >
            <Text style={{ color: tema.cores.texto, fontWeight: "500" }}>Todas</Text>
          </TouchableOpacity>
        </View>

        <Transacoes />
      </Container>
    </>
  );
};

export default Home;
