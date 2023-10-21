import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
  },
  scroll: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  commentWrapper: {
    flex: 1,
    paddingBottom: 31,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
    marginTop: 32,
  },
  formContainer: {
    position: "absolute",
    bottom: -34,
    left: 0,
    right: 0,
    padding: 16,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    padding: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#000",
    paddingRight: 46,
  },
  postBtn: {
    position: "absolute",
    right: 24,
    top: 24,
    width: 34,
    height: 34,
  },
});