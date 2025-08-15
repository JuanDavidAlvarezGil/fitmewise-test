import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registering:", name, email, password);
  };

  return (
    <View className="flex-1 justify-center p-6 bg-white">
      <Text className="text-2xl font-bold text-center mb-6">
        Register
      </Text>

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-green-500 py-3 rounded-lg"
      >
        <Text className="text-white text-center font-medium">
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
