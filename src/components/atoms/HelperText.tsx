import React from "react";
import { Pressable, Text, View } from "react-native";

type HelperTextProps = {
  message: string;
  textButton: string;
  onPress?: () => void;
};

export default function HelperText({
  message,
  textButton,
  onPress,
}: HelperTextProps) {
  return (
    <View className="flex-row justify-center mt-4">
      <Text className="text-gray-600">{message} </Text>
      <Pressable onPress={onPress}>
        <Text className="text-blue-600 font-semibold">{textButton}</Text>
      </Pressable>
    </View>
  );
}
