import { View, Text, FlatList, Pressable } from "react-native";
import { criarEstilos } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTema } from "../../Contexts/TemaContext";

interface ExtratoItem {
  id: string;
  titulo: string;
  valor: string;
  tipo: string;
  data: string;
  categoria: string;
  descricao: string;
}

const dados: ExtratoItem[] = [
  {
    id: "1",
    titulo: "Primeiro item",
    valor: "R$ 1000,00",
    tipo: "entrada",
    data: "01/10/2023",
    categoria: "Salário",
    descricao: "Recebimento mensal",
  },
  {
    id: "2",
    titulo: "Segundo item",
    valor: "R$ 50,00",
    tipo: "saída",
    data: "02/10/2023",
    categoria: "Alimentação",
    descricao: "Almoço no restaurante",
  },
  {
    id: "3",
    titulo: "Terceiro item",
    valor: "R$ 200,00",
    tipo: "saída",
    data: "03/10/2023",
    categoria: "Transporte",
    descricao: "Combustível do carro",
  },
  {
    id: "4",
    titulo: "Quarto item",
    valor: "R$ 150,00",
    tipo: "entrada",
    data: "04/10/2023",
    categoria: "Freelance",
    descricao: "Projeto concluído para cliente",
  },
  {
    id: "5",
    titulo: "Quinto item",
    valor: "R$ 80,00",
    tipo: "saída",
    data: "05/10/2023",
    categoria: "Lazer",
    descricao: "Cinema com amigos",
  },
  {
    id: "6",
    titulo: "Sexto item",
    valor: "R$ 300,00",
    tipo: "entrada",
    data: "06/10/2023",
    categoria: "Venda",
    descricao: "Venda de itens usados",
  },
  {
    id: "7",
    titulo: "Sétimo item",
    valor: "R$ 120,00",
    tipo: "saída",
    data: "07/10/2023",
    categoria: "Saúde",
    descricao: "Consulta médica",
  },
  {
    id: "8",
    titulo: "Oitavo item",
    valor: "R$ 60,00",
    tipo: "saída",
    data: "08/10/2023",
    categoria: "Educação",
    descricao: "Compra de livro",
  },
];

const Transacoes = () => {
  const navigation = useNavigation();
  const { tema } = useTema();
  const styles = criarEstilos(tema);

  return (
    <View style={styles.extratoContainer}>
      <FlatList
        data={dados}
        keyExtractor={(item: ExtratoItem) => item.id.toString()}
        renderItem={({ item }: { item: ExtratoItem }) => (
          <Pressable>
            <View style={styles.dadosContainer}>
              <View style={styles.dados}>
                <View
                  style={[
                    styles.corOperacao,
                    item.tipo === "entrada"
                      ? styles.corEntrada
                      : styles.corSaida,
                  ]}
                ></View>
                <View style={styles.descricao}>
                  <Text style={styles.textSuperior}>{item.descricao}</Text>
                  <Text style={styles.textInferior}>{item.categoria}</Text>
                </View>

                <View style={styles.dataValor}>
                  <Text style={styles.textSuperior}>{item.valor}</Text>
                  <Text style={styles.textInferior}>
                    {item.data.slice(0, 5)}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Transacoes;
