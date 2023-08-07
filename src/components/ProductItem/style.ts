import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    shadowRadius: 1,
    shadowOpacity: 0.1,
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "300",
    textAlign:'justify'
  },
  price: {
    fontSize: 16,
    fontWeight: "200",
    color: "#000",
    marginTop: 10,
  },
  
  color: {
    fontSize: 16,
    fontWeight: "200",
    color: "#000",
    marginTop: 10,
  },
  
  imageContainer: {
    flex:0.5,
    padding: 10,
  },

  infoContainer: {
    flex:1,
    padding: 10,
    alignItems: "center",
  },
});
