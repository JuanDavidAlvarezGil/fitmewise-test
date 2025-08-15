import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  onPress,
  disabled,
  loading,
  variant = "primary",
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-400 p-3 rounded-lg"
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white font-semibold text-center">{text}</Text>
      )}
    </Pressable>
  );
}
