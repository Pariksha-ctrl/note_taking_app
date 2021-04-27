import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton, Text, TextInput, FAB } from "react-native-paper";
import Header from "../component/Header";

function AddNotes({ navigation }) {
  // creating useState variables for notes which is empty initially
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  // when we press save button then we will navigate the data back to the new note screen
  function onSaveNote() {
    navigation.state.params.addNotes({ noteTitle, noteDescription });
    navigation.goBack();
  }

  return (
    <>
      <Header titleText="Add a New Note" />
      <IconButton
        icon="close"
        size={23}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Title"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Description"
          value={noteDescription}
          mode="flat"
          onChangeText={setNoteDescription}
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == "" ? true : false}
          onPress= { () => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "green",
    position: "absolute",
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
  text: {
    height: 300,
    fontSize: 15,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddNotes;
