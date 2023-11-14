import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props?.onDeleteItem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.textGoal}>{props?.text?.goal}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
  },
  textGoal: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
