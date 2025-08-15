import { RouteProp } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useGetUserByIdQuery } from "../../features/api/reqresApi";
import {
  RootStackParamList,
  useAppNavigation,
} from "../../navigation/RootNavigator";
import Background from "../atoms/Background";
import Card from "../atoms/Card";
import ProfileAvatar from "../atoms/ProfileAvatar";
import { useTranslation } from "react-i18next";

type UserDetailScreenProps = {
  route: RouteProp<RootStackParamList, "UserDetail">;
};

export default function UserDetailScreen({ route }: UserDetailScreenProps) {
  const { t } = useTranslation();
  const { data, isLoading } = useGetUserByIdQuery(route.params.id);
  const { id, avatar, email, first_name, last_name } = data || {};
  const navigation = useAppNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: first_name
        ? `#${id} ${first_name} ${last_name}`
        : t("users.detailsTitle"),
    });
  }, [navigation, first_name, last_name]);

  return (
    <Background>
      <Card>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View className="items-center mt-4 px-4">
            {!!avatar && <ProfileAvatar uri={avatar} />}
            <Text
              className={`text-2xl font-bold mt-4 dark:text-white text-black`}
            >
              {first_name} {last_name}
            </Text>
            <Text className={`text-base dark:text-gray-300 text-gray-600`}>
              {email}
            </Text>
          </View>
        )}
      </Card>
    </Background>
  );
}
