import { StyleSheet } from "react-native";


export const criarEstilos = (tema: any) => {
    return StyleSheet.create({
  areaImg: {
    width: "100%",
    alignItems: "center",
    gap: tema.espacamento.md,
    marginTop: tema.espacamento.lg,
    backgroundColor: tema.cores.secundaria,
    paddingVertical: tema.espacamento.lg,
    borderRadius: tema.radius.lg,
  },

  btnEditImg: {
    borderRadius: 75,
  },

  perfilImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  nomeText: {
    fontSize: tema.fonte.tamanho.lg,
    fontWeight: "bold",
    color: tema.cores.texto,
  },

  emailText: {
    fontSize: tema.fonte.tamanho.md,
    color: tema.cores.texto,
    fontWeight: "500",
  },

  opcoesContainer: {
    flex: 1,
    marginTop: tema.espacamento.lg,
  },
})
};
 