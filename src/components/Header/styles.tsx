import { StyleSheet } from "react-native";


export const criarEstilos = (tema: any) => {
  return StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 140,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: tema.cores.destaque,
    alignItems: "center",
  },

  perfil: {
    width: "60%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: tema.espacamento.lg,
    gap: tema.espacamento.sm,
    marginTop: 30,
  },

  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  nomeContainer: {
    flexDirection: "row",
  },

  nome: {
    color: "#FFFFFF",
    fontSize: tema.fonte.tamanho.md,
    fontWeight: "bold",
  },
  saudacao: {
    color: "#FFFFFF",
    fontSize: tema.fonte.tamanho.sm,
    marginTop: 4,
  },

  seta: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 2,
  },
})
};
