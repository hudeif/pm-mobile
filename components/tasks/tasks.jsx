import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import TaskCard from "./taskCard";
import { url } from "../../config";
import MyText from "../common/myText";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [logged, setLogged] = useState(null);

  const getLoggedUser = async () => {
    try {
      let value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        setLogged(JSON.parse(value));
      }
    } catch (e) {}
  };

  async function loadTasks() {
    const { data } = await axios.get(url + "task/list");

    const filtered = data.filter((task) =>
      task.users.includes(task.users.find((u) => u.id === logged.id))
    );

    if (logged.userRole.roleName === "admin") {
      setTasks(data);
    } else {
      console.log(filtered);
      setTasks(filtered);
    }
  }

  useEffect(() => {
    getLoggedUser();
    loadTasks();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={{ width: 150, margin: 8 }}>
        <Button title="new task" />
      </View>
      <View style={{}}>
        {tasks.length == 0 ? (
          <View
            style={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyText text={"please wait "} size={18} />
            <ActivityIndicator size={25} />
          </View>
        ) : (
          tasks.map((task) => <TaskCard task={task} />)
        )}
      </View>
    </ScrollView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: "#edf1f5",
  },
});
