
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Criando um Array de Objetos em JavaScript puro
  const tarefas = [
    { id: 1, descricao: "Estudar ES6+", concluida: true },
    { id: 2, descricao: "Configurar ambiente Expo", concluida: true },
    { id: 3, descricao: "Entender o funcionamento do JSX", concluida: false },
    { id: 4, descricao: "Finalizar Roteiro de Pratica 02", concluida: false },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

     {tarefas.map((tarefa) => (
  <View key={tarefa.id} style={styles.card}>
    <Text style={styles.textoTarefa}>
      {tarefa.concluida ? "[OK] " : "[PENDENTE] "}
      {tarefa.descricao}
    </Text>
  </View>
))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#20325a",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoTarefa: {
    fontSize: 16,
    color: "#333333",
  },
});