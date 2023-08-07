import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
  },
  list:{
    padding:20
  },
  title: {
    padding: 30,
    textAlign: "center",
    width: "100%",
    fontSize: 16,
  },
  empty:{
    alignItems:'center',
  }
});
