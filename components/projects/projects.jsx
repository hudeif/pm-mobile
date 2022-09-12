import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import ProjectCard from "./projectCard";
import { url } from "../../config";
import MyText from "../common/myText";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [logged, setLogged] = useState(null);

  const getLoggedUser = async () => {
    try {
      let value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        setLogged(JSON.parse(value));
      }
    } catch (e) {}
  };

  async function loadProjects() {
    const { data } = await axios.get(url + "project/list");

    const filtered = data.filter((project) =>
      project.users.includes(project.users.find((u) => u.id === logged.id))
    );

    if (logged.userRole.roleName === "admin") {
      setProjects(data);
    } else {
      setProjects(filtered);
    }
  }

  useEffect(() => {
    getLoggedUser();
    setTimeout(() => {
      loadProjects();
    }, 1000);
  }, []);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ width: 150, margin: 8 }}>
          <Button title="new project" />
        </View>
        <View>
          {/* show loading icon if the fetching delayed */}
          {projects.length == 0 ? (
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
            projects.map((project) => <ProjectCard project={project} />)
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: "#edf1f5",
  },
});
