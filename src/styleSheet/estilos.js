import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  cabecalhoTopo: {
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
  cabecalhoTopoTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 12,
  },

  cabecalho: {
    backgroundColor: "#d6d6d6",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 4,
  },
  cabTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111",
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  nome: {
    fontSize: 15,
    color: "#222",
  },

  rodape: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#888",
  },
});