import React from "react";
import { Text } from "react-native";

type ScreenTitleProps = {
  title: string;
};

export default function ScreenTitle({ title }: ScreenTitleProps) {
  return (
    <Text className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
      {title}
    </Text>
  );
}
