import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text style={styles.myNameStyle}>My name is Leo</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  myNameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
