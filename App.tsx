import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { Provider, useDispatch } from "react-redux";
import "./global.css";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { setToken } from "./src/features/auth/authSlice";
import "./src/i18n";
import { InactivityProvider } from "./src/modules/session/InactivityProvider";
import { store } from "./src/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { calculateMilisecondsFromMinutes } from "./src/utils/calculateMiliseconds";

const Bootstrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) dispatch(setToken(token));
    })();
  }, [dispatch]);
  return <>{children}</>;
};

const INACTIVITY_TIMEOUT_MS = calculateMilisecondsFromMinutes(5);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Bootstrapper>
          <InactivityProvider timeoutMs={INACTIVITY_TIMEOUT_MS}>
            <RootNavigator />
          </InactivityProvider>
        </Bootstrapper>
      </NavigationContainer>
    </Provider>
  );
}
