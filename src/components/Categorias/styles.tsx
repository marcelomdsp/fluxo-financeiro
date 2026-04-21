import { StyleSheet } from "react-native";

export const criarEstilos = (tema: any) => {
  return StyleSheet.create({
    botao: {
      padding: tema.espacamento.sm,
      backgroundColor: tema.cores.secundaria,
    },
    textoBotao: {
      fontSize: tema.fonte.md,
      color: tema.cores.texto,
    },
    overlay: {
      position: "absolute",
      top: 0, // ajuste conforme o botão
      left: 0,
      right: 0,
      zIndex: 999,
    },
    painel: {
      position: "absolute",
      top: 60, // ajuste conforme o botão
      left: 0,
      right: 0,
      backgroundColor: tema.cores.selecao,
      borderRadius: tema.radius.sm,
      overflow: "hidden",
      zIndex: 2,
      borderColor: tema.cores.texto,
    },

    textoPainel: {
      fontSize: tema.fonte.md,
      color: tema.cores.texto,
    },

    item: {
      padding: tema.espacamento.sm,
      borderBottomWidth: 0.5,
      borderBottomColor: "grey",
    },

    backdrop: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    containerAbsoluto: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },
  });
};
