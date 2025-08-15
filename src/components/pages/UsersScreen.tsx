import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const mockUsers = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Bob Johnson" },
];

export default function UsersScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">Users</Text>

      <FlatList
        data={mockUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="border border-gray-300 rounded-lg p-4 mb-3"
            onPress={() =>
              navigation.navigate("UserDetailScreen", { userId: item.id })
            }
          >
            <Text className="text-lg">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
