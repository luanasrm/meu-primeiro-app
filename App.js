import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("Luana");

  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
          }}
          style={styles.avatar}
        />

        <Text style={styles.nomeUsuario}>{nome}</Text>

        <Text style={styles.profissao}>
          Estudante de Engenharia de Computação
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Seguindo " + nome)}
        >
          <Text style={styles.textoBotao}>Seguir</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },

  cartao: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "80%",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  nomeUsuario: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14325A",
  },

  profissao: {
    fontSize: 16,
    color: "#505050",
    marginBottom: 20,
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#0064A0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
  },
});
