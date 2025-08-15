import { useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../components/organism/LoginScreen";
import RegisterScreen from "../components/organism/RegisterScreen";
import UserDetailScreen from "../components/organism/UserDetailScreen";
import UsersScreen from "../components/organism/UsersScreen";
import { useAppSelector } from "../redux/store";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Users: undefined;
  UserDetail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen
            name="Users"
            component={UsersScreen}
            options={{ title: "Users" }}
          />
          <Stack.Screen
            name="UserDetail"
            component={UserDetailScreen}
            options={{ title: "User" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export const useAppNavigation = useNavigation<
  NativeStackNavigationProp<RootStackParamList>
>;
