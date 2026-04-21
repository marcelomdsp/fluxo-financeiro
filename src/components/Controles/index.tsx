import { StyleSheet, View } from "react-native";

export default function Controles() {
  return <View style={styles.controlesContainer}></View>;
}

const styles = StyleSheet.create({
  controlesContainer: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
});
