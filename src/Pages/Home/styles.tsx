import { StyleSheet } from "react-native";

export const criarEstilos = (tema: any) => {
  return StyleSheet.create({
   
    areaSaldo: {
      justifyContent: "center",
      backgroundColor: tema.cores.secundaria,
      height: 130,
      width: "100%",
      padding: tema.espacamento.lg,
      marginTop: tema.espacamento.sm,
      borderRadius: tema.radius.lg,
    },

    areaEntradasSaidas: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      gap: tema.espacamento.sm,
    },

    entradaSaida: {
      flex: 1,
      justifyContent: "center",
      height: 90,
      padding: tema.espacamento.lg,
      marginTop: tema.espacamento.sm,
      borderRadius: tema.radius.lg,
      borderColor: "#ddd",
      backgroundColor: tema.cores.secundaria,
    },

    textSaldo: {
      color: tema.cores.texto,
      fontWeight: "bold",
      width: 90,
      fontSize: tema.fonte.tamanho.md,
    },

    textEntrada: {
      color: tema.cores.entrada,
      fontWeight: "bold",
      borderRadius: tema.radius.sm,
      width: 90,
      fontSize: tema.fonte.tamanho.md,
    },

    textSaida: {
      color: tema.cores.saida,
      fontWeight: "bold",
      width: 90,
      fontSize: tema.fonte.tamanho.md,
    },

    areaBotoes: {
      flexDirection: "row",
      alignItems: "center",
      gap: tema.espacamento.sm,
      backgroundColor: tema.cores.primaria,
      height: 130,
      width: "100%",
      marginTop: tema.espacamento.sm,
      borderRadius: tema.radius.lg,
    },

    button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      backgroundColor: tema.cores.secundaria,
      marginHorizontal: tema.espacamento.sm,
      alignItems: "center",
    },

    textButton: {
      color: tema.cores.texto,
      fontWeight: "bold",
      textAlign: "center",
    },

    areaTitulo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingBottom: 20,
      borderRadius: tema.radius.lg,
    },

    TodasButton: {
      padding: tema.espacamento.sm,
      backgroundColor: tema.cores.secundaria,
      borderRadius: tema.radius.lg,
    },

    titulo: {
      fontSize: tema.fonte.tamanho.lg,
      fontWeight: "bold",
      color: tema.cores.texto,
    },

    textB: {
      color: tema.cores.texto,
      fontSize: tema.fonte.tamanho.md,
    },
  });
};
