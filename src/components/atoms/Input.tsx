import React from "react";
import { Text, TextInput, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  label?: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <>
      {label && (
        <Text className="text-gray-700 dark:text-gray-300 mb-2">{label}</Text>
      )}
      <TextInput
        className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        {...props}
      />
    </>
  );
}
