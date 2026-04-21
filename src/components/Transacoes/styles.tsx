import { StyleSheet } from "react-native";

export const criarEstilos = (tema: any) => {
   return StyleSheet.create({
  extratoContainer: {
    width: "100%",
    flex: 1,
    color: "grey",
  },

  dadosContainer: {
    width: "100%",
    backgroundColor: tema.cores.secundaria,
    height: 80,
    borderRadius: tema.radius.lg,
    marginBottom: tema.espacamento.sm,

  },

  dados: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    gap: tema.espacamento.sm,
  },

  corOperacao: {
    width: tema.espacamento.md,
    height: "100%",
    borderTopLeftRadius: tema.radius.lg,
    borderBottomLeftRadius: tema.radius.lg,
    justifyContent: "center",
  },

  corEntrada: {
    backgroundColor: tema.cores.entrada,
  },

  corSaida: {
    backgroundColor: tema.cores.saida,
  },

  descricao: {
    flex: 2,
    height: "100%",
    justifyContent: "space-between",
    padding: tema.espacamento.sm,
    marginLeft: tema.espacamento.xm,
  },

  dataValor: {
    alignItems: "flex-end",
    width: 150,
    paddingRight: tema.espacamento.md,
    height: "100%",
    justifyContent: "space-between",
    padding: tema.espacamento.sm,
    marginRight: tema.espacamento.md,
  },

  textSuperior: {
    flex: 1,
    fontSize: tema.fonte.tamanho.md,
    fontWeight: "500",
    color: tema.cores.texto,
  },

  textInferior: {
    fontSize: tema.fonte.tamanho.md,
    color: "grey",
  },
})
};
