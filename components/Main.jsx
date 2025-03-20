import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import { fetchCharacters } from  '../lib/getCharacters';
import CharacterCard from "./CharacterCard";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setTimeout(() => {
        setCharacters(data);
        setLoading(false);
      }, 500);
    };
    getCharacters();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#b5e00d" style={styles.loader} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
      <StatusBar style="light" />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202329", 
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
