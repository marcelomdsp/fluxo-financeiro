import { Text, TouchableOpacity, View } from "react-native";
import { criarEstilos } from "./style";
import { useTema } from "../../Contexts/TemaContext";
import React, { useState } from "react";
import Input from "../../components/Inputs";
import InputData from "../../components/Inputs/InputData";
import { useNavigation } from "@react-navigation/native";
import { CategoryDropdown } from "../../components/Categorias";
import { MaterialIcons } from "@expo/vector-icons";
import { Transacao } from "../../Dominio/Transacao";


const dadosCategoria = [
  { id: 1, label: "Alimentação", value: "alimentacao" },
  { id: 2, label: "Transporte", value: "transporte" },
  { id: 3, label: "Lazer", value: "lazer" },
  { id: 4, label: "Saúde", value: "saude" },
  { id: 5, label: "Educação", value: "educacao" },
  { id: 6, label: "Outros", value: "outros" },
  { id: 7, label: "Salário", value: "salario" },
  { id: 8, label: "Freelance", value: "freelance" },
  { id: 9, label: "Investimentos", value: "investimentos" },
  { id: 10, label: "Presente", value: "presente" },
  { id: 11, label: "Venda", value: "venda" },
  { id: 12, label: "Outras Receitas", value: "outras_receitas" },
];

const dadosModalidade = [
  { id: 1, label: "Dinheiro", value: "dinheiro" },
  { id: 2, label: "Crédito", value: "credito" },
  { id: 3, label: "Débito", value: "debito" },
  { id: 5, label: "Pix", value: "pix" },
];

const dadosTipo = [
  { id: 1, label: "Entrada", value: "entrada" },
  { id: 2, label: "Saída", value: "saida" },
];

const NovaTransacao = () => {
  const { tema } = useTema();
  const styles = criarEstilos(tema);
  const [focusDescricao, setFocusDescricao] = useState(false);
  const [focusValor, setFocusValor] = useState(false);
  const navigation = useNavigation();
  const [plHolderErr, setPlHolderErr] = useState("");

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState<number | null>(null);
  const [modalidade, setModalidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState(new Date());
  const [tipo, setTipo] = useState("");

  const adicionarTransacao = async () => {
    if (
      descricao.trim() === "" ||
      valor === null ||
      modalidade.trim() === "" ||
      categoria.trim() === "" ||
      tipo.trim() === ""
    ) {
      setPlHolderErr("Preencha todos os campos");
      return;
    }

    const novaTransacao = new Transacao(
      "",
      valor,
      descricao,
      categoria,
      modalidade,
      data,
      tipo as "entrada" | "saida"
    );

    try {
      await novaTransacao.salvar();
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar transação:", error);
    }
  };

  return (
    <View style={styles.NTContainer}>
      <View style={styles.inputsContainer}>
        <View style={styles.areaInput}>
          <MaterialIcons
            name="description"
            size={24}
            color={tema.cores.texto}
          />
          <Input
            placeholder={plHolderErr ? plHolderErr : "Descrição"}
            keyboardType="default"
            placeholderTextColor={focusDescricao ? "grey" : tema.cores.texto}
            onChangeText={(text) => setDescricao(text)}
            value={descricao}
            onFocus={() => setFocusDescricao(true)}
          />
        </View>
        <View style={styles.areaInput}>
          <MaterialIcons
            name="attach-money"
            size={24}
            color={tema.cores.texto}
          />
          <Input
            placeholder={plHolderErr ? plHolderErr : "R$ 0,00"}
            keyboardType="numeric"
            placeholderTextColor={focusValor ? "grey" : tema.cores.texto}
            onFocus={() => setFocusValor(true)}
            onChangeText={(text) => setValor(parseFloat(text))}
            value={valor !== null ? valor.toString() : ""}
          />
        </View>

        <View style={styles.areaInput}>
          <MaterialIcons name="currency-exchange" size={20} color={tema.cores.texto} />
          <CategoryDropdown
            tipo="modalidade"
            categorias={dadosModalidade.map((cat) => cat.label)}
            onChange={(value) => setModalidade(value)}
          />
        </View>

        <View style={styles.areaInput}>
          <MaterialIcons name="category" size={20} color={tema.cores.texto} />
          <CategoryDropdown
            tipo="categoria"
            categorias={dadosCategoria.map((cat) => cat.label)}
          />
        </View>

        <View style={styles.areaInput}>
          <MaterialIcons name="date-range" size={24} color={tema.cores.texto} />
          <InputData />
        </View>

        <View style={styles.areaInput}>
          <MaterialIcons name="swap-vert" size={24} color={tema.cores.texto} />
          <CategoryDropdown
            tipo="tipo"
            categorias={dadosTipo.map((cat) => cat.label)}
          />
        </View>

      </View>

      {/*Botão de adicionar transação e cancelar*/}
      <View style={styles.adicionarCancelarContainer}>
        <TouchableOpacity
          style={styles.cancelarButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.cancelarText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.adicionarButton} onPress={() => adicionarTransacao()}>
          <Text style={styles.adicionarButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NovaTransacao;
