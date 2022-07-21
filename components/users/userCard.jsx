import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-material-ui";
import MyAvatar from "../common/avatar";
import MyText from "../common/myText";
import MyBadge from "../common/badge";
const UserCard = ({ user }) => {
  const { firstName, lastName, userRole, projects, tasks } = user;
  return (
    <Card style={styles.cardContainer}>
      <View style={{ flex: 1 }}>
        <MyAvatar label={firstName.charAt(0)} size={64} />
      </View>
      <View style={{ marginLeft: 20, flex: 5 }}>
        <MyText
          text={`${firstName + " " + lastName}`}
          size={18}
          color="#525f7f"
          style={{ marginBottom: 4 }}
        />
        {renderUserRole(userRole.roleName)}
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <MyText text={"projects"} size={16} color="#74788d" />
            <MyText text={projects.length} color="#74788d" />
          </View>
          <View style={{ alignItems: "center" }}>
            <MyText text={"tasks"} size={16} color="#74788d" />
            <MyText text={tasks.length} color="#74788d" />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  cardContainer: {
    container: {
      padding: 20,
      borderRadius: 6,
      marginTop: 15,
      display: "flex",
      flexDirection: "row",
    },
  },
});

function renderUserRole(role) {
  if (role === "client")
    return (
      <MyBadge
        label={role}
        color="#3476c3"
        roundFull
        background={"rgba(52, 75, 195, 0.18)"}
        style={{ marginBottom: 10 }}
      />
    );
  if (role === "admin")
    return (
      <MyBadge
        label={role}
        color="#34c38f"
        roundFull
        background={"rgba(52, 195, 143, 0.18)"}
        style={{ marginBottom: 10 }}
      />
    );
  return (
    <MyBadge
      label={role}
      color="#f1a04c"
      roundFull
      background={"rgba(241, 190, 76, 0.34)"}
      style={{ marginBottom: 10 }}
    />
  );
}
