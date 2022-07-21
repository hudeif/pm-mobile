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

const Projects = () => {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const { data } = await axios.get(url + "project/list");
    setProjects(data);
  }

  useEffect(() => {
    loadProjects();
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
