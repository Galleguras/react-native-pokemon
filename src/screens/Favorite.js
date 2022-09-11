import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { getPokemonFavoriteApi } from "../api/favorite";
export default function Favorite() {
  const [isFavorite, setIsFavorite] = useState(undefined);

  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites}></Button>
    </SafeAreaView>
  );
}
