import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../redux/store";
import Button from "../atoms/Button";

const mockUsers = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Bob Johnson" },
];

export default function UsersScreen({ navigation }: any) {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

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
      <Button text="Cerrar Sesion" onPress={onLogout} />
    </View>
  );
}
