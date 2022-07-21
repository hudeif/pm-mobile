import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import axios from "axios";
import UserCard from "./userCard";
import { url } from "../../config";
import { useState, useEffect } from "react";
import MyText from "../common/myText";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const { data } = await axios.get(url + "user/list");
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={{ width: 150, margin: 8 }}>
        <Button title="new user" />
      </View>
      <View>
        {users.length == 0 ? (
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
          users.map((user) => <UserCard user={user} />)
        )}
      </View>
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke",
  },
});
