import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const CounterReducer = (state:number, action: string) => {
  switch(action){
    case 'Increase':
      return state + 1
    case 'Decrease':
      return state - 1
    default:
      return state;
  }
}

const CounterScreen = () => {
  
  const [counter, setCounter] = useReducer(CounterReducer,0)

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
            setCounter("Increase");
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
            setCounter("Decrease");
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
