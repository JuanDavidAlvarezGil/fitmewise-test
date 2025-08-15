import React from "react";
import { Image } from "react-native";

type AvatarProps = {
  uri: string;
};

export default function Avatar({ uri }: AvatarProps) {
  return <Image source={{ uri }} className="w-12 h-12 rounded-full mr-4" />;
}
