import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

interface IResultsList {
  title: string;
  results: any;
  navigation: any;
}

const ResultsList: React.FC<IResultsList> = ({
  title,
  results,
  navigation,
}) => {
  const renderFlatListRows: ListRenderItem<any> = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ResultsShow", { id: item.id });
      }}
    >
      <ResultsDetail result={item} />
    </TouchableOpacity>
  );

  if(!results.length){
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={renderFlatListRows}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
