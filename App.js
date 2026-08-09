import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  function aumentar() {
    setContagem(contagem + 1);
  }

  function diminuir() {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  }

  function zerar() {
    setContagem(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contagem Atual:</Text>

      <Text style={styles.numero}>{contagem}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={diminuir}
        >
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={aumentar}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botaoZerar}
        onPress={zerar}
      >
        <Text style={styles.textoBotao}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  titulo: {
    fontSize: 20,
    color: "#333333",
  },

  numero: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4caf50",
    marginBottom: 20,
  },

  botoes: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#4caf50",
    width: 70,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  botaoZerar: {
    backgroundColor: "#f44336",
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});