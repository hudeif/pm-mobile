import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Avatar, Card, Dialog, Drawer } from "react-native-material-ui";
import { useState } from "react";
import MyText from "./common/myText";

const CardDesign = () => {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "blue" }}>Card design</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardImage}>
          <Text>A</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.name}>Hudeifa abdirashid</Text>
          <Avatar
            text="B"
            style={{ container: { backgroundColor: "yellow" } }}
          />
          <Text style={styles.title}>Software developer</Text>
          <Text style={styles.email}>Hudeifa@gmail.com</Text>
        </View>
      </View>
      <View>
        <Card style={{ container: { padding: 20, borderRadius: 6 } }}>
          <MyText text={"card title"} size={20} />
          <MyText
            text={
              "lorem ipsum lorem pu if the ink of the object and the text of the card."
            }
            color="#606770"
            style={{ marginBottom: 16 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Avatar
                text="A"
                style={{ container: { backgroundColor: "blue" } }}
                size={32}
              />
            </View>
            <View style={{ marginLeft: -10 }}>
              <Avatar
                text="B"
                style={{ container: { backgroundColor: "green" } }}
                size={32}
              />
            </View>
            <View style={{ marginLeft: -10 }}>
              <Avatar
                text="C"
                style={{ container: { backgroundColor: "cyan" } }}
                size={32}
              />
            </View>
          </View>
        </Card>
      </View>
      {show && (
        <View>
          <Dialog>
            <Dialog.Title style={{ color: "red" }}>
              <MyText text={"Add User"} color="black" size={18} />
            </Dialog.Title>
            <Dialog.Content>
              <MyText
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </Dialog.Content>
          </Dialog>
        </View>
      )}
      <View>
        <Drawer>
          <Drawer.Header>
            <Drawer.Header.Account
              avatar={<Avatar text="A" />}
              accounts={[
                { avatar: <Avatar text="B" /> },
                { avatar: <Avatar text="C" /> },
              ]}
              footer={{
                dense: true,
                centerElement: {
                  primaryText: "Reservio",
                  secondaryText: "business@email.com",
                },
                rightElement: "arrow-drop-down",
              }}
            />
          </Drawer.Header>
          <Drawer.Section
            divider
            items={[
              { icon: "bookmark-border", value: "Notifications" },
              { icon: "today", value: "Calendar", active: true },
              { icon: "people", value: "Clients" },
            ]}
          />
          <Drawer.Section
            title="Personal"
            items={[
              { icon: "info", value: "Info" },
              { icon: "settings", value: "Settings" },
            ]}
          />
        </Drawer>
      </View>
    </View>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    paddingHorizontal: 30,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 35,
    elevation: 3,
  },
  cardImage: {
    backgroundColor: "hsla(47,79%,58%,0.4)",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
  },
  cardInfo: {},
  name: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 6,
    fontFamily: "Poppins_400Regular",
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
    color: "hsl(210,8%,35%)",
    fontFamily: "Poppins_400Regular",
  },
  email: {
    fontSize: 14,
    color: "hsl(210,8%,45%)",
    fontFamily: "Poppins_400Regular",
  },
});
