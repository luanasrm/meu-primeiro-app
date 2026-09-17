
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function UrnaEletronica() {
  // Estados independentes para cada candidato
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);

// Total de votos é um dado derivado dos estados
const totalVotos = votosA + votosB + votosC;

  // Função para zerar todos os votos
  const zerarVotos = () => {
    setVotosA(0);
    setVotosB(0);
    setVotosC(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Votação</Text>

      {/* Candidato A */}
      <View style={styles.candidato}>
        <Text style={styles.nome}>Candidato A</Text>

        <Text style={styles.votos}>
          Votos: {votosA}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setVotosA(prev => prev + 1)}
        >
          <Text style={styles.textoBotao}>Votar</Text>
        </TouchableOpacity>
      </View>

      {/* Candidato B */}
      <View style={styles.candidato}>
        <Text style={styles.nome}>Candidato B</Text>

        <Text style={styles.votos}>
          Votos: {votosB}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setVotosB(prev => prev + 1)}
        >
          <Text style={styles.textoBotao}>Votar</Text>
        </TouchableOpacity>
      </View>

      {/* Candidato C */}
      <View style={styles.candidato}>
        <Text style={styles.nome}>Candidato C</Text>

        <Text style={styles.votos}>
          Votos: {votosC}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setVotosC(prev => prev + 1)}
        >
          <Text style={styles.textoBotao}>Votar</Text>
        </TouchableOpacity>
      </View>

      {/* Total de votos */}
      <Text style={styles.total}>
        Total de votos: {totalVotos}
      </Text>

      {/* Botão para zerar */}
      <TouchableOpacity
        style={styles.botaoZerar}
        onPress={zerarVotos}
      >
        <Text style={styles.textoBotaoZerar}>
          Zerar votação
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#14325A",
  },

  candidato: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#14325A",
    marginBottom: 8,
  },

  votos: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 12,
  },

  botao: {
    backgroundColor: "#14325A",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 8,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14325A",
    marginTop: 10,
    marginBottom: 20,
  },

  botaoZerar: {
    backgroundColor: "#C62828",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  textoBotaoZerar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
