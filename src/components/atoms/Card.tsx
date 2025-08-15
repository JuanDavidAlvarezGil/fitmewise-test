import React from "react";
import { View } from "react-native";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <View className="w-full sm:w-96 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      {children}
    </View>
  );
}
