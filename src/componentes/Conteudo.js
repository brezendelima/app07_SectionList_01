import React from "react";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { estilos } from "../styleSheet/estilos";
import dados_Alunos from "../dados/dados_alunos.json";

export default function Conteudo() {
  function mostrarDetalhes(aluno) {
    const mensagem =
      `CPF: ${aluno.cpf}\n` +
      `Nascimento: ${aluno.nascimento}\n` +
      `Ano: ${aluno.ano}`;

    if (Platform.OS === "web") {
      alert(aluno.nome + "\n\n" + mensagem);
    } else {
      Alert.alert(aluno.nome, mensagem);
    }
  }

  function mostraItem({ item }) {
    return (
      <TouchableOpacity
        style={estilos.item}
        onPress={() => mostrarDetalhes(item)}
        activeOpacity={0.2}
      >
        <Text style={estilos.nome}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }

  function mostraCabecalhoLista({ section }) {
    return (
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabTexto}>{section.title}</Text>
      </View>
    );
  }

  function extrairId(item) {
    return item.id;
  }

  return (
    <View style={estilos.conteudo}>
      <SectionList
        sections={dados_Alunos}
        keyExtractor={extrairId}
        renderItem={mostraItem}
        renderSectionHeader={mostraCabecalhoLista}
      />
    </View>
  );
}