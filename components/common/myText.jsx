import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const MyText = ({ text, color, size, style }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text
      style={{
        ...style,
        fontFamily: "Poppins_400Regular",
        color,
        fontSize: size,
      }}
    >
      {text}
    </Text>
  );
};

export default MyText;
