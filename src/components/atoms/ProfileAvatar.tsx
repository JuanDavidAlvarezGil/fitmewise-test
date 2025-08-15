import React from "react";
import { Image } from "react-native";

type ProfileAvatarProps = {
  uri: string;
};

export default function ProfileAvatar({ uri }: ProfileAvatarProps) {
  return (
    <Image
      source={{ uri }}
      className="w-32 h-32 rounded-full border-4 border-blue-500"
    />
  );
}
