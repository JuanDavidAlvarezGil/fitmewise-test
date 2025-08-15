import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { User } from "../../features/api/reqresApi";
import Button from "./Button";
import { useTranslation } from "react-i18next";

type UserItemProps = {
  item: User;
  onPress: (userId: number) => void;
};

export default function UserItem({ item, onPress }: UserItemProps) {
  const { t } = useTranslation();
  return (
    <View className="flex-row items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-3 border border-gray-200">
      <View className="flex-row items-center">
        <Avatar uri={item.avatar} />
        <View>
          <Text className="text-lg font-semibold text-gray-800 dark:text-white">
            {item.first_name} {item.last_name}
          </Text>
          <Text className="text-gray-500 dark:text-gray-400 text-sm">
            {item.email}
          </Text>
        </View>
      </View>
      <Button text={t("users.view")} onPress={() => onPress(item.id)} />
    </View>
  );
}
