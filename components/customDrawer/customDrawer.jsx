import { Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MyAvatar from "../common/avatar";
import MyText from "../common/myText";

const CustomDrawer = (props) => {
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
            label={"a"}
            size={100}
            fontSize={28}
            style={{ marginLeft: 0, marginBottom: 10 }}
          />
          <MyText text={"hudeifa abdi"} color="#fff" size={20} />
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
