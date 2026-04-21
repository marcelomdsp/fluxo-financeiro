import { StyleSheet } from "react-native";

export const criarEstilos = (tema: any) => {
    return StyleSheet.create({
  NTContainer: {
    flex: 1,
    backgroundColor: tema.cores.secundaria,
    padding: tema.espacamento.md,
  },

  inputsContainer: {
    marginTop: tema.espacamento.sm,
    backgroundColor: tema.cores.secundaria,
    borderRadius: tema.radius.lg,
    padding: tema.espacamento.md,
  },

  areaInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: tema.espacamento.sm,
  },

  categoriaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  addCategoriaButton: {
    backgroundColor: tema.cores.destaque,
    paddingVertical: tema.espacamento.sm,
    paddingHorizontal: tema.espacamento.md,
    borderRadius: tema.radius.sm,
  },

  addCategoriaButtonText: {
    color: tema.cores.texto,
    fontWeight: "bold",
  },

  adicionarCancelarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15,
    alignItems: "center",
  },

  adicionarButton: {
    backgroundColor: tema.cores.destaque,
    paddingVertical: tema.espacamento.sm,
    borderRadius: tema.radius.lg,
    alignItems: "center",
    width: "50%",
  },
  adicionarButtonText: {
    color: "white",
    fontSize: tema.fonte.md,
    fontWeight: "bold",
  },

  cancelarButton: {
    paddingVertical: tema.espacamento.sm,
    paddingHorizontal: tema.espacamento.md,
    borderWidth: 1.5,
    borderColor: tema.cores.texto,
    borderRadius: tema.radius.lg,
  },

  cancelarText: {
    fontSize: tema.fonte.md,
    color: tema.cores.texto,
  },

  textError: {
    color: tema.cores.perigo,
    paddingVertical: 1,
    fontSize: tema.fonte.sm,
  },

  label: {
    marginBottom: tema.espacamento.xs,
    fontWeight: "bold",
    color: tema.cores.texto,
  },
})
};
