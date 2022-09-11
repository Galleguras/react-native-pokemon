import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = () => {
    console.log("Añadir a favoritos: ", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ margin: 20 }}
    />
  );
}
