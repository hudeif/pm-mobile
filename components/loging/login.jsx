import React from "react";
import { useState } from "react";
import { Button, Pressable, StyleSheet, TextInput, View } from "react-native";
import { url } from "../../config";
import MyText from "../common/myText";
import Axios from "axios";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ change }) => {
  const [userName, setUserName] = useState("hudeifa@gmail.com");
  const [password, setPassword] = useState("1234");
  const [showError, setShowError] = useState(false);

  const handleChangeUserName = (entered) => {
    console.log(entered);
    setUserName(entered);
  };

  const handleChangePassword = (entered) => {
    setPassword(entered);
  };

  const handleLogin = async () => {
    const obj = {
      email: userName,
      password: password,
    };

    const { data } = await Axios.post(
      "http://192.168.1.16:8080/user/check",
      obj
    );

    if (data.text === "success") {
      try {
        await AsyncStorage.setItem("loggedUser", JSON.stringify(data.user));
        await Axios.get(`http://192.168.1.16:8080/user/${data.user.id}/online`);
        change(data.user);
      } catch (e) {
        console.log("failed to save", e);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <View style={styles.container}>
      <MyText
        text={"Login"}
        size={30}
        style={{ marginBottom: 30 }}
        color="darkblue"
      />
      <TextInput
        value={userName}
        onChangeText={handleChangeUserName}
        placeholder="Email"
        style={{ ...styles.input, marginBottom: 19 }}
      />
      <TextInput
        value={password}
        onChangeText={handleChangePassword}
        placeholder="Password "
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={() => handleLogin()}>
        <MyText text={"Login"} color="white" size={18} />
      </Pressable>
      <MyText text={showError && "user not found"} color="red" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{ ...styles.button, marginRight: 10, backgroundColor: "blue" }}
          onPress={() => {
            setUserName("hudeifa@gmail.com");
            setPassword("1234");
          }}
        >
          <MyText text={"Admin"} color="white" size={18} />
        </Pressable>
        <Pressable
          style={{
            ...styles.button,
            marginRight: 10,
            backgroundColor: "green",
          }}
          onPress={() => {
            setUserName("mohamed@gmail.com");
            setPassword("1234");
          }}
        >
          <MyText text={"member"} color="white" size={18} />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: "blueviolet",
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 30,
  },
});
