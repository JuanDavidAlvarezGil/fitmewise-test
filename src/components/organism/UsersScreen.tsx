import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { useGetUsersQuery } from "../../features/api/reqresApi";
import { useAppNavigation } from "../../navigation/RootNavigator";
import Background from "../atoms/Background";
import Card from "../atoms/Card";
import HelperText from "../atoms/HelperText";
import ScreenTitle from "../atoms/ScreenTitle";
import UserItem from "../atoms/UserItem";
import Button from "../atoms/Button";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../features/auth/authSlice";

export default function UsersScreen() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { data, refetch } = useGetUsersQuery(0);
  const navigation = useAppNavigation();
  const handlePress = (userId: number) => {
    navigation.navigate("UserDetail", { id: userId });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Background>
      <Card>
        <ScreenTitle title={t("users.listTitle")} />
        <FlatList
          data={data ?? []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserItem item={item} onPress={handlePress} />
          )}
          ListEmptyComponent={
            <HelperText
              message={t("users.noUsers")}
              textButton={t("users.refresh")}
              onPress={refetch}
            />
          }
        />
        <Button text={t("auth.logout")} onPress={handleLogout} />
      </Card>
    </Background>
  );
}
