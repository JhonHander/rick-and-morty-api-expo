import React, { useState } from "react";
import { FlatList, ActivityIndicator, StyleSheet, SafeAreaView, Modal, TouchableOpacity, View, Button, Text, RefreshControl} from "react-native";
import { useFetchCharacters } from  '../lib/getCharacters'
import CharacterCard from "./CharacterCard";
import { StatusBar } from "expo-status-bar";

const Main = () => {

  const { characters, loading, setPage, refreshCharacters } = useFetchCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const handlePress = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    refreshCharacters();
    setRefreshing(false);
  }

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#b5e00d"]} // Para Android - color 
            tintColor="#b5e00d"  // Para iOS - color del spinner
          />
        }
      />
      <StatusBar style="light" />

      {selectedCharacter && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={closeModal}
        >
          <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={closeModal}>
            <TouchableOpacity style={styles.modalContent} activeOpacity={1} onPress={() => {}}>
              <Text style={styles.modalTitle}>{selectedCharacter.name}</Text>
              <Text>Origin: {selectedCharacter.origin.name}</Text>
              <Text>Location: {selectedCharacter.location.name}</Text>
              <Text>Episodes: {selectedCharacter.episode.length}</Text>
              <Button title="Close" onPress={closeModal} />
            </TouchableOpacity>
          </TouchableOpacity>
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
