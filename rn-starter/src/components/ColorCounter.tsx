import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

interface IColorCounter {
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ColorCounter: React.FC<IColorCounter> = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
