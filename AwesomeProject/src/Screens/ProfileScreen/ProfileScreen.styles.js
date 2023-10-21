import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    position: "relative",
    minHeight: 812,
  },
  profileWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    top: 140,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logOutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  avatar: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
    width: 120,
    aspectRatio: 1,
    marginTop: 76,
    marginLeft: "auto",
    marginRight: "auto",
  },
  avatarImage: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  addButton: {
    position: "absolute",
    width: 44,
    height: 44,
    right: -24,
    bottom: 0,
  },
  userName: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
  },
  allPostsWrapper: {
    flex: 1,
    position: "relative",
    marginBottom: 43,
  },
  scroll: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
