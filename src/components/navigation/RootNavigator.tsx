import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import UserDetailScreen from "../pages/UserDetailScreen";
import UsersScreen from "../pages/UsersScreen";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Users: undefined;
  UserDetail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const token = useSelector((s: RootState) => s.auth.token);

  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen name="Users" component={UsersScreen} options={{ title: "Users" }} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: "User" }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
};