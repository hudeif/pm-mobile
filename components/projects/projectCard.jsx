import { Text, View } from "react-native";
import { Avatar, Card } from "react-native-material-ui";
import MyAvatar from "../common/avatar";
import MyBadge from "../common/badge";
import MyText from "../common/myText";
const ProjectCard = ({ project }) => {
  const { projectName, description, endDate, users } = project;

  return (
    <Card
      style={{ container: { padding: 20, borderRadius: 6, marginTop: 15 } }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MyText text={projectName} size={20} />
        {renderStatus(project)}
      </View>
      <MyText text={`due : ${endDate}`} color={"#c40037cc"} />
      <MyText
        text={
          description.slice(0, 75) +
          (project.description.length < 70 ? "" : " ...")
        }
        color="#606770"
        style={{ marginBottom: 16, textAlign: "left" }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {users.map((user) => (
          <MyAvatar label={user.firstName.charAt(0)} />
        ))}
      </View>
    </Card>
  );
};

export default ProjectCard;

const renderStatus = (project) => {
  const completed = project.tasks?.filter(
    (t) => t.status === "completed"
  ).length;

  const pending = project.tasks?.filter((t) => t.status === "pending").length;

  const totalTasks = project.tasks?.length;

  if (pending > 0 && completed < totalTasks) {
    return (
      <MyBadge
        label={"pending"}
        color={"#f1a04c"}
        background={"rgba(241, 190, 76 , 0.34)"}
      />
    );
  } else if (completed === 0) {
    return (
      <MyBadge
        label={"not-started"}
        color={"#f14c4c"}
        background={"#f14c7a57"}
      />
    );
  } else {
    return (
      <MyBadge
        label={"completed"}
        color={"#34c38f"}
        background={"rgba(52, 195, 143, 0.18)"}
      />
    );
  }
};
