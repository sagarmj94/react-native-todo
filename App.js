import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { Alert } from "react-native";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoal = () => {
    setModalIsVisible(true);
  };
  const endAtartAddGoal = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    const trimmedGoalText = enteredGoalText.trim();
    if (
      trimmedGoalText === "" ||
      courseGoals.some((goal) => goal.goal === trimmedGoalText)
    ) {
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), goal: trimmedGoalText },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal?.key !== id)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color={"#a065ec"} onPress={startAddGoal} />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAtartAddGoal}
        />
        <View style={styles.goalsContainer}>
          <View>
            <FlatList
              data={courseGoals}
              renderItem={({ item }) => {
                return (
                  <GoalItem
                    text={item}
                    onDeleteItem={() => deleteGoalHandler(item.key)}
                  />
                );
              }}
              keyExtractor={(item) => item.key}
              alwaysBounceVertical={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
