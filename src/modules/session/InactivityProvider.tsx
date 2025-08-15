import React, { useEffect, useRef, useCallback } from "react";
import { AppState, AppStateStatus, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout, touch } from "../../features/auth/authSlice";
import { RootState } from "../../redux/store";

export const InactivityProvider = ({ timeoutMs, children }: { timeoutMs: number; children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const token = useSelector((s: RootState) => s.auth.token);

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