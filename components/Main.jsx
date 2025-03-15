/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import { fetchCharacters } from  '../lib/getCharacters';
import CharacterCard from "./CharacterCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setLoading(false);
    };
    getCharacters();
  }, []);

  if (loading) {
    // return <ActivityIndicator size="large" color="#00ff00" style={styles.loader} />;
    return <ActivityIndicator size="large" color="black" style={styles.loader} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
