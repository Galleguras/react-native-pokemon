import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response || []) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoriteApi();
    console.log("new--c", favorites);
    favorites.push(id);
    console.log("new--x", favorites);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonFavoriteApi();
    return _.includes(response, id);
  } catch (error) {
    throw error;
  }
}
export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoriteApi();
    console.log("new--c", favorites);
    const newFavorites = _.pull(favorites, id);
    console.log("new--Z", newFavorites);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
