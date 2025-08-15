import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

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
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`w-full p-3 rounded ${variant === "primary" ? "bg-blue-500" : "bg-green-500"}`}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white text-center font-semibold">{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
