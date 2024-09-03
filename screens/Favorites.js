import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-contect";
import { useSelector } from "react-redux";

const Favorites = ({}) => {
  //   const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  //   const favoriteMeals = MEALS.filter((meal) =>
  //     favoriteMealCtx.ids.includes(meal.id)
  //   );
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return favoriteMeals.length === 0 ? (
    <View style={styles.rootConatiner}>
      <Text style={styles.text}>You have no favorite meal yet.</Text>
    </View>
  ) : (
    <MealsList items={favoriteMeals} />
  );
};

export default Favorites;

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
