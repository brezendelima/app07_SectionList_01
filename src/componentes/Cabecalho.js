import React from "react";
import { View, Text } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalhoTopo}>
      <Text style={estilos.cabecalhoTopoTexto}>Lista de Alunos por Curso</Text>
    </View>
  );
}