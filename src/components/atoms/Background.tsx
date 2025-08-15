import React from "react";
import { View } from "react-native";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      {children}
    </View>
  );
}
