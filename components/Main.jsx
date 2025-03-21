import React, { useState } from "react";
import { FlatList, ActivityIndicator, StyleSheet, SafeAreaView, Modal, TouchableOpacity, View, Button, Text} from "react-native";
import { useFetchCharacters } from  '../lib/getCharacters'
import CharacterCard from "./CharacterCard";
import { StatusBar } from "expo-status-bar";

const Main = () => {

  const { characters, loading, setPage } = useFetchCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handlePress = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CharacterCard character={item} onPress={handlePress}/>}
        contentContainerStyle={{ paddingBottom: 50 }}
        onEndReached={() => setPage((prevPage) => prevPage + 1)} 
        onEndReachedThreshold={0.5} 
        ListFooterComponent={loading && <ActivityIndicator size="large" color="#b5e00d" style={styles.loader} />}
      />
      <StatusBar style="light" />

      {selectedCharacter && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedCharacter.name}</Text>
              <Text>Origin: {selectedCharacter.origin.name}</Text>
              <Text>Location: {selectedCharacter.location.name}</Text>
              <Text>Episodes: {selectedCharacter.episode.length}</Text>
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Main;
