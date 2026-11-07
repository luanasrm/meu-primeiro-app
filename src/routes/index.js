
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

// Tela de Login
function TelaLogin() {
  const { signIn } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Área Restrita
      </Text>

      <Button
        title="Entrar no Sistema"
        onPress={() => signIn("teste@email.com", "123")}
      />
    </View>
  );
}

// Tela principal
function TelaDashboard() {
  const { usuario, signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Bem-vindo, {usuario?.nome}
      </Text>

      <Button
        title="Sair da Conta"
        color="red"
        onPress={signOut}
      />
    </View>
  );
}

// Controle das rotas
export default function Rotas() {
  const { logado } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {logado ? (
          <Stack.Screen name="Dashboard" component={TelaDashboard} />
        ) : (
          <Stack.Screen name="Login" component={TelaLogin} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}