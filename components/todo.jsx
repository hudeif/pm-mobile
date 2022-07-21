import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";

export default function Todo() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleChange = (entered) => {
    setEnteredText(entered);
  };

  const handlePress = () => {
    setGoals([...goals, enteredText]);
    setEnteredText("");
  };

  const handleDelete = (text) => {
    const filtered = goals.filter((goal) => goal !== text);
    setGoals(filtered);
  };

  const handleItemTouch = (goal) => {
    setEnteredText(goal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="your goal!! "
          value={enteredText}
          onChangeText={handleChange}
          style={styles.goalInput}
        />
        <View>
          <Button title="add goal" onPress={handlePress} />
        </View>
      </View>
      <View>
        <Text>List of goals</Text>
        {goals.map((goal, index) => (
          <TouchableHighlight key={index} onPress={() => handleItemTouch(goal)}>
            <View style={styles.goalItem}>
              <Text style={styles.goalItemText}>{goal}</Text>
              <Button
                title="del"
                color={"red"}
                onPress={() => handleDelete(goal)}
              />
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 32,
            height: 32,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "white", marginTop: -2 }}>A</Text>
        </View>
        <View
          style={{
            width: 32,
            height: 32,
            backgroundColor: "purple",
            justifyContent: "center",
            marginLeft: -12,
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "white", marginTop: -2 }}>B</Text>
        </View>
        <View
          style={{
            width: 32,
            height: 32,
            backgroundColor: "blue",
            justifyContent: "center",
            marginLeft: -12,
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "white", marginTop: -2 }}>C</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  goalInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#00befe",
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 15,
    backgroundColor: "#3d3dd287",
    borderRadius: 4,
  },
  goalItemText: { color: "white" },
});
