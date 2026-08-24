import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Tarefa {
  id: number;
  descricao: string;
  concluida: boolean;
}

interface ItemTarefaProps {
  tarefa: Tarefa;
}

export default function ItemTarefa({ tarefa }: ItemTarefaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.textoTarefa}>
        {tarefa.concluida ? "[OK] " : "[PENDENTE] "}
        {tarefa.descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
