import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  AppBar,
  HStack,
  IconButton,
} from "@react-native-material/core";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import CardDesign from "./components/cardDesign";
import Todo from "./components/todo";
import MyText from "./components/common/myText";
import Projects from "./components/projects/projects";
import Tasks from "./components/tasks/tasks";
import Users from "./components/users/users";
import Roles from "./components/roles/roles";
import CustomDrawer from "./components/customDrawer/customDrawer";
import Login from "./components/loging/login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

export default function App() {
  const [logged, setLogged] = useState(null);

  const getLoggedUser = async () => {
    try {
      let value = await AsyncStorage.getItem("loggedUser");
      if (value !== null) {
        setLogged(JSON.parse(value));
      }
    } catch (e) {}
  };

  useEffect(() => {
    getLoggedUser();
  }, [logged]);

  const changeLogged = (status) => {
    console.log("hi");
    setLogged(status);
  };

  const handleLogout = async () => {
    console.log("logut process");
    try {
      await AsyncStorage.removeItem("loggedUser");
      setLogged(null);
    } catch (e) {}
  };

  if (logged == null) return <Login change={changeLogged} />;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Projects"
        drawerContent={(props) => (
          <CustomDrawer {...props} loged={logged} logout={handleLogout} />
        )}
      >
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="Tasks" component={Tasks} />
        {logged?.userRole?.roleName === "admin" && (
          <Drawer.Screen name="Users" component={Users} />
        )}
        {/* <Drawer.Screen name="Roles" component={Roles} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
