import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, FAB } from "react-native-paper";

function ViewNotes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You don't have any notes!</Text>
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        label="Add a new Note"
        onPress={() => navigation.navigate("AddNotes")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    backgroundColor: "lightblue",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
});

export default ViewNotes;
