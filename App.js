import { useState } from "react";
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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Projects"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="Tasks" component={Tasks} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Roles" component={Roles} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
