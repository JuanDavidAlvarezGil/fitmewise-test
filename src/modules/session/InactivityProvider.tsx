import React, { useCallback, useEffect, useRef } from "react";
import {
  AppState,
  AppStateStatus,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { logout, touch } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

type InactivityProviderProps = {
  timeoutMs: number;
  children: React.ReactNode;
};

export const InactivityProvider = ({
  timeoutMs,
  children,
}: InactivityProviderProps) => {
  const dispatch = useAppDispatch();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const token = useAppSelector((state) => state.auth.token);

  const resetTimer = useCallback(() => {
    if (!token) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    dispatch(touch());
    timerRef.current = setTimeout(() => dispatch(logout()), timeoutMs);
  }, [dispatch, timeoutMs, token]);

  useEffect(() => {
    resetTimer();
  }, [token, resetTimer]);

  useEffect(() => {
    const sub = AppState.addEventListener("change", (nextState) => {
      const wasBackground = appState.current.match(/inactive|background/);
      appState.current = nextState;
      if (nextState === "active" && wasBackground) {
        resetTimer();
      }
    });
    return () => sub.remove();
  }, [resetTimer]);

  return (
    <TouchableWithoutFeedback onPress={resetTimer} onLongPress={resetTimer}>
      <View className="flex-1">{children}</View>
    </TouchableWithoutFeedback>
  );
};
