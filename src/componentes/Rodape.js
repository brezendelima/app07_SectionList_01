import React from "react";
import { View, Text } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodapeTexto}>Lista de Alunos</Text>
    </View>
  );
}