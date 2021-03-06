import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface ImageDetailInterfase {
  title: string;
  imageSource: any; 
  imageScore: number;
}
const ImageDetail: React.FC<ImageDetailInterfase> = ({ title, imageSource, imageScore }) => {
  return (
    <View>
        <Image source = {imageSource}/>
      <Text> {title} - score: {imageScore} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
