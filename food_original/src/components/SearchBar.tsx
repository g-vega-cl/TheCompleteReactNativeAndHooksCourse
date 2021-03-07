import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

interface LabeledValue {
  searchValue: string;
  updateSearchValue: (value: string) => void;
  onTermSubmit: () => void;
}
const SearchBar: React.FC<LabeledValue> = ({
  searchValue,
  updateSearchValue,
  onTermSubmit,
}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={searchValue}
        onChangeText={updateSearchValue}
        style={styles.inputStyle}
        autoCapitalize="none"
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
