
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("Luana");
  const [seguindo, setSeguindo] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* CARTÃO 1 */}
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
          style={[
            styles.botao,
            seguindo && styles.botaoDesativado,
          ]}
          onPress={() => setSeguindo(!seguindo)}
        >
          <Text style={styles.textoBotao}>
            {seguindo ? "Já seguindo" : "Seguir"}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        />
      </View>

      {/* CARTÃO 2 */}
      <View style={styles.cartao}>
        <Image
          source={{
            uri: "https://www.dicasfree.com/wp-content/uploads/kiwi.jpg",
          }}
          style={styles.avatar}
        />

        <Text style={styles.nomeUsuario}>Jéssica</Text>

        <Text style={styles.profissao}>
          Desenvolvedora Front-end
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Seguindo Jéssica")}
        >
          <Text style={styles.textoBotao}>Seguir</Text>
        </TouchableOpacity>
      </View>

      {/* CARTÃO 3 */}
      <View style={styles.cartao}>
        <Image
          source={{
            uri: "https://www.capitalmudas.com.br/uploads/fornecedores/2019/06/laranja-seleta.jpg",
          }}
          style={styles.avatar}
        />

        <Text style={styles.nomeUsuario}>Marcos</Text>

        <Text style={styles.profissao}>
          Engenheiro de Software
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Seguindo Marcos")}
        >
          <Text style={styles.textoBotao}>Seguir</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
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
    marginBottom: 25,
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

  botaoDesativado: {
    backgroundColor: "#808080",
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

