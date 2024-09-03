import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";
const MealsOverview = ({ route, navigation }) => {
  const {
    params: { categoryId: catId },
  } = route;
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((el) => el.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [CATEGORIES, catId]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
