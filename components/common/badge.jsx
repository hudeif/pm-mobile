import { View } from "react-native";
import MyText from "./myText";

const MyBadge = ({ label, color, background, roundFull, style }) => {
  return (
    <View style={{ alignSelf: "flex-start" }}>
      <MyText
        text={label}
        size={12}
        color={color}
        style={{
          ...style,
          textAlign: "center",
          backgroundColor: `${background}`,
          paddingHorizontal: 10,
          borderRadius: roundFull ? 50 : 4,
        }}
      />
    </View>
  );
};

export default MyBadge;
