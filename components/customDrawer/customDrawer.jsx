import { Button, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MyAvatar from "../common/avatar";
import MyText from "../common/myText";

const CustomDrawer = (props) => {
  const { firstName, lastName } = props?.loged;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 280,
          backgroundColor: "green",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: 150,
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 15,
            marginBottom: 15,
          }}
        >
          <MyAvatar
            label={firstName?.charAt(0)}
            size={100}
            fontSize={28}
            style={{ marginLeft: 0, marginBottom: 10 }}
          />
          <MyText text={firstName + " " + lastName} color="#fff" size={20} />
          <Button title="logout" onPress={() => props.logout()} />
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
