import React from "react";
import { Text, View } from "react-native";
import LoginForm from "../molecules/LoginForm";

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-2xl font-bold mb-6">Bienvenido</Text>
      <LoginForm />
    </View>
  );
}
