import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItems = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) => {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("MealDetail", { mealId: id });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItems;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.2,
  },
});
