import React from "react";
import { View, Text } from "react-native";


export default function UserDetailScreen({ route }: any) {
  const { userId } = route.params;

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">User Details</Text>
      <Text className="text-lg">User ID: {userId}</Text>
    </View>
  );
}
