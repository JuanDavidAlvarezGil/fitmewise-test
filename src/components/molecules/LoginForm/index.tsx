import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../../../features/api/reqresApi";

export default function LoginForm() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const result = await login({ email, password }).unwrap();
      console.log("Token recibido:", result.token);
    } catch (err) {
      console.error("Error al iniciar sesión", err);
    }
  };

  return (
    <View className="self-stretch">
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error && (
        <Text className="text-red-500 mb-4">Credenciales inválidas</Text>
      )}
      <View className="gap-2 self-stretch">
        <Button
          text="Ingresar"
          onPress={handleLogin}
          disabled={isLoading}
          loading={isLoading}
        />
        <Button
          text="Registrarse"
          onPress={() => navigation.navigate("Register")}
          disabled={isLoading}
          loading={isLoading}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
