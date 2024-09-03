import React, { useContext, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-contect";

const MealDetailsScreen = ({ route, navigation }) => {
  const {
    params: { mealId },
  } = route;
  //   const favoriteMealCtx = useContext(FavoritesContext);
  const dispatch = useDispatch();
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const seletedMeal = MEALS.find((meal) => meal.id === mealId);
  //   const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  //
  function headerButtonPressHandler() {
    if (mealIsFavorite) {
      //   favoriteMealCtx.removeFavorites(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //   favoriteMealCtx.addFavorites(mealId);
      dispatch(
        addFavorite({
          id: mealId,
        })
      );
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{
          uri: seletedMeal.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{seletedMeal.title}</Text>
      <MealDetails
        duration={seletedMeal.duration}
        complexity={seletedMeal.complexity}
        affordability={seletedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={seletedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={seletedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
