import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState([
    "", "", "",
    "", "", "",
    "", "", "",
  ]);

  const [jogador, setJogador] = useState("X");

  function jogar(index) {
    // Não permite jogar em uma célula que já foi preenchida
    if (tabuleiro[index] !== "") {
      return;
    }

    const novoTabuleiro = [...tabuleiro];

    novoTabuleiro[index] = jogador;

    setTabuleiro(novoTabuleiro);

    // Alterna entre X e O
    if (jogador === "X") {
      setJogador("O");
    } else {
      setJogador("X");
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Jogo da Velha
      </Text>

      <Text style={styles.jogador}>
        Vez do jogador: {jogador}
      </Text>

      <View style={styles.tabuleiro}>

        {tabuleiro.map((celula, index) => (
          <TouchableOpacity
            key={index}
            style={styles.celula}
            onPress={() => jogar(index)}
          >
            <Text style={styles.textoCelula}>
              {celula}
            </Text>
          </TouchableOpacity>
        ))}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14325A",
    marginBottom: 10,
  },

  jogador: {
    fontSize: 16,
    color: "#505050",
    marginBottom: 15,
  },

  tabuleiro: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  celula: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },

  textoCelula: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#14325A",
  },
});