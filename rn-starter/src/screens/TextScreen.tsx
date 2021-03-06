import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const handleSetName = (value: string) => {
    setName(value);
  };

  const badPassword = () => {
      return(
      <Text style = {styles.enterPassword}>
          Your password has to be at least 5 characters long
      </Text>
      )
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.enterPassword}>Enter password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={handleSetName}
      />
      {name.length < 5 ? badPassword() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  enterPassword: {
      margin: 15,
      fontSize: 16
  },
  container:{
      display: "flex"
  }
});

export default TextScreen;
