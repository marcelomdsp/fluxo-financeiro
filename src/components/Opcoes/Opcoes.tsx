import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useTema } from "../../Contexts/TemaContext";

type opcoesProps = {
    titulo: string;
    onPress: () => void;
};

const Opcoes = (props: opcoesProps) => {

  const { tema, modo, alternarTema } = useTema();
  const styles = criarEstilos(tema);


  return (
    <>
      <TouchableOpacity style={styles.opcao} onPress={props.onPress}>
        <Text style={styles.text}>{props.titulo}</Text>
        <View style={{position: 'absolute', right: 15, top: '50%'}}>
         {props.titulo === "Tema" ? (
          <Switch
          style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
            value={modo === "escuro" ? true : false}
            onValueChange={alternarTema}
          />
         ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};
export default Opcoes;

const criarEstilos = (tema: any) => {
  return StyleSheet.create({
  opcao: {
    padding: tema.espacamento.md,
    backgroundColor: tema.cores.secundaria,
    borderRadius: tema.radius.md,
    marginBottom: tema.espacamento.md,
  },
  text: {
    fontSize: tema.fonte.tamanho.md,
    color: tema.cores.texto,
    fontWeight: "500",
  },
})
};
