import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

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
  imageContainer: {
    flex:1,
    padding: 10,
  },

  infoContainer: {
    flex:1,
    padding: 10,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    textAlign:'justify'
  },
  price: {
    textAlign: "center",
    color: "gray",
    marginTop:10,
  },
  color: {
    textAlign: "center",
    color: "gray",
    marginTop:10,
  },
  quantity: {
    fontSize: 15,
    margin: 10,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems:'center',
    display: "flex",
    flexDirection: "row",
  },
});
