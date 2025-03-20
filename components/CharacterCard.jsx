import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.status}>  
          {character.status} - {character.species}
        </Text>
        <Text style={styles.type}>{character.type || "No type"}</Text>
        <Text style={styles.gender}>{character.gender}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    // backgroundColor: "#fff",
    backgroundColor: "#3c3e44", // Color de las tarjetas
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#97ce4c", 
  },
  status: {
    color: "#42b4ca", 
  },
  type: {
    color: "#b5e00d", 
  },
  gender: {
    color: "white", // Blanco para género
  },
});

export default CharacterCard;
