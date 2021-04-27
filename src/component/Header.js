import React from "react";
import { View, StyleSheet } from "react-native";
import { AppBar, Title } from "react-native-paper";

// passing titleText as a props
function Header({ titleText }) {
  return (
    <AppBar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </AppBar.Header>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
  },
});

export default Header;
