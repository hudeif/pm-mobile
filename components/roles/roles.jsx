import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import { url } from "../../config";
import { useState, useEffect } from "react";
import { Card } from "react-native-material-ui";
import MyText from "../common/myText";

const Roles = () => {
  const [roles, setRoles] = useState([]);

  const loadRoles = async () => {
    const { data } = await axios.get(url + "role/list");
    setRoles(data);
  };

  useEffect(() => {
    loadRoles();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: 150, margin: 8 }}>
        <Button title="new role" />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", height: "100%" }}>
        {roles.length == 0 ? (
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyText text={"please wait "} size={18} />
            <ActivityIndicator size={25} />
          </View>
        ) : (
          roles.map((role) => (
            <Card
              style={{
                container: { padding: 20, width: "45%", borderRadius: 6 },
              }}
            >
              <MyText text={role.roleName} size={18} />
            </Card>
          ))
        )}
      </View>
    </View>
  );
};

export default Roles;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke",
    height: "100%",
  },
});
