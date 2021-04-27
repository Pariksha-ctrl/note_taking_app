import React, { useState, useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Header from "../component/Header";
import { Context as NoteContext } from "../context/NoteContext";

function ViewNotes({ navigation }) {
  // creating useState variables for notes with empty array which will empty initially
  // we will show this into the flatlist
  // const [notes, setNotes] = useState([]);
  const { state, addnote, deletenote } = useContext(NoteContext);
  // this is a helper method
  const addNotes = (note) => {
    note.id = state.length + 1;
    addnote(note);
    // creating a random id
    //note.id = state.length + 1;
    // it will get all the notes in the array
    // setNotes([...notes, note]);
  };

  return (
    <>
      <Header titleText="Note Taking App" />
      <View style={styles.container}>
        {state.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You don't have any notes!</Text>
          </View>
        ) : (
          // creating a Flatlist
          <FlatList
            data={state}
            // inside the render item we are passing item prop
            renderItem={({ item }) => (
              <List.Item
                title={item.noteTitle}
                description={item.noteDescription}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                onPress={() => deletenote(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add a new Note"
          onPress={() =>
            navigation.navigate("AddNotes", {
              addNotes,
            })
          } // passing addNotes function as prop
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  fab: {
    backgroundColor: "blue",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 27,
    fontWeight: "bold",
  },
});

export default ViewNotes;
