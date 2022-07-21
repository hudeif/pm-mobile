import { useState } from "react";
import { Text, TouchableHighlight, Touchable, View } from "react-native";
import { Avatar } from "react-native-material-ui";
import { Popable } from "react-native-popable";
const MyAvatar = ({ label, size, fontSize, tooltip, style }) => {
  const getDefaultBg = (character) => {
    let char = character.charAt();
    let colors = [
      "#f46a6a",
      "#34c38f",
      "#556ee6",
      "#74788d",
      "#f1b44c",
      "rgb(239, 108, 0)",
      "rgb(182, 99, 196)",
      "rgb(99, 171, 199)",
      "rgb(114, 86, 38)",
      "rgb(216, 76, 241)",
      "rgb(80,165,241)",
    ];

    let group1 = ["a", "f", "l"];
    let group5 = ["r", "v"];
    let group2 = ["b", "g", "m"];
    let group6 = ["s", "w"];
    let group3 = ["c", "h", "n"];
    let group7 = ["t", "x"];
    let group4 = ["d", "i"];
    let group8 = ["o", "u", "y"];

    // let group5 = ["e", "j", "p", "q", "z", "k"];
    if (!char) return colors[1];
    if (group1.includes(char.toLowerCase())) return colors[10];
    if (group2.includes(char.toLowerCase())) return colors[1];
    if (group3.includes(char.toLowerCase())) return colors[2];
    if (group4.includes(char.toLowerCase())) return colors[6];
    if (group5.includes(char.toLowerCase())) return colors[3];
    if (group6.includes(char.toLowerCase())) return colors[4];
    if (group7.includes(char.toLowerCase())) return colors[5];
    return colors[7];
  };

  let props = {
    visible: false,
  };

  return (
    <Popable
      {...(Boolean(tooltip) == true ? null : { ...props })}
      content={tooltip}
      style={{ top: -32, left: -2 }}
    >
      <View
        style={{
          marginLeft: -10,
          ...style,
        }}
      >
        <Avatar
          text={label.toUpperCase()}
          style={{
            container: {
              backgroundColor: `${getDefaultBg(label)}`,
            },
            content: {
              fontSize: fontSize || 14,
            },
          }}
          size={size || 32}
        />
      </View>
    </Popable>
  );
};

export default MyAvatar;
