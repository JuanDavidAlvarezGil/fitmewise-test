import React from "react";
import { TextInput, TextInputProps } from "react-native";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  ...props
}: InputProps & TextInputProps) {
  return (
    <TextInput
      className="w-full border border-gray-300 rounded p-3 mb-4 bg-white"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
}
