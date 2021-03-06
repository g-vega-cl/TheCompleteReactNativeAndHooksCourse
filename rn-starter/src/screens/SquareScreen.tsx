import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

interface IColorAction {
  type: string;
  payload: number;
}

interface IColorState {
  red: number;
  green: number;
  blue: number;
}

const ColorReducer = (state: IColorState, action: IColorAction) => {

  switch(action.type){
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload}
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload}
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload}
    default:
      return state;
  }
    
}

const SquareScreen = () => {  
  const [state, dispatch] = useReducer(ColorReducer, {red: 0, green: 0, blue: 0});

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({type: 'red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'red', payload: -COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({type: 'blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'blue', payload: -COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: 'green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'green', payload: -COLOR_INCREMENT})}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
