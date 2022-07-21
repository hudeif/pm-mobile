import { View } from "react-native";
import { Card, Icon } from "react-native-material-ui";
import MyAvatar from "../common/avatar";
import MyBadge from "../common/badge";
import MyText from "../common/myText";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
const TaskCard = ({ task }) => {
  const {
    title,
    description,
    startingDate,
    endingDate,
    status,
    priority,
    projects,
    comments,
    users,
  } = task;
  return (
    <Card
      style={{
        container: {
          padding: 20,
          borderRadius: 6,
          marginTop: 15,
        },
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        {renderPriority(priority)}
        {renderStatus(status)}
      </View>
      <MyText text={title} size={20} style={{ marginBottom: 0 }} />
      <MyText
        text={`project : ${projects.projectName}`}
        size={15}
        style={{ marginBottom: 4 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="calendar"
            size={18}
            color="black"
            style={{ marginRight: 8 }}
          />
          <MyText text={startingDate} style={{ marginTop: 5 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="calendar"
            size={18}
            color="black"
            style={{ marginRight: 8 }}
          />
          <MyText text={endingDate} style={{ marginTop: 5 }} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={18}
            style={{ marginEnd: 8 }}
            color="black"
          />
          <MyText text={comments.length} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {users.map((user) => (
            <MyAvatar
              key={user.id}
              label={user.firstName.charAt(0)}
              tooltip={`${user.firstName + " " + user.lastName}`}
            />
          ))}
        </View>
      </View>
    </Card>
  );
};

export default TaskCard;

function renderPriority(priority) {
  if (priority === "low")
    return (
      <MyBadge
        label={"low"}
        roundFull
        color={"#34c38f"}
        background={"rgba(52, 195, 143, 0.18)"}
        style={{ marginRight: 6 }}
      />
    );
  if (priority === "medium")
    return (
      <MyBadge
        label={"medium"}
        roundFull
        color={"#f1b44c"}
        background={"rgba(241, 180, 76, 0.18)"}
        style={{ marginRight: 6 }}
      />
    );

  return (
    <MyBadge
      label={"high"}
      roundFull
      color={"#f14c4c"}
      background={"rgba(241, 76, 122, 0.34)"}
      style={{ marginRight: 6 }}
    />
  );
}

function renderStatus(status) {
  if (status === "completed")
    return (
      <MyBadge
        label={"completed"}
        roundFull
        color={"#34c38f"}
        background={"rgba(52, 195, 143, 0.18)"}
        style={{ marginRight: 6 }}
      />
    );
  if (status === "pending")
    return (
      <MyBadge
        label={"pending"}
        roundFull
        color={"#f1b44c"}
        background={"rgba(241, 180, 76, 0.18)"}
        style={{ marginRight: 6 }}
      />
    );

  return (
    <MyBadge
      label={"todo"}
      roundFull
      color={"#3476c3"}
      background={"rgba(52, 75, 195, 0.18)"}
      style={{ marginRight: 6 }}
    />
  );
}
