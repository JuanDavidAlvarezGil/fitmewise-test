import React from "react";
import { Text, View } from "react-native";

type ErrorTextProps = {
  hasError: boolean;
  message?: string;
};

export default function ErrorText({ hasError, message }: ErrorTextProps) {
  if (!hasError) return null;

  return (
    <View className="my-2">
      <Text className="text-red-600">Se ha producido un error</Text>
      {!!message && <Text className="text-red-600">{message}</Text>}
    </View>
  );
}
