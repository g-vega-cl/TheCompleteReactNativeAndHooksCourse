import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchApi, results, errorMessage } = useResults();

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const filterResultsByPrice = (price: "$" | "$$" | "$$$" | "$$$$") => {
    return results.filter((result) => {
      return result["price"] === price;
    });
  };

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        updateSearchValue={updateSearchValue}
        onTermSubmit={() => {
          searchApi(searchValue);
        }}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
