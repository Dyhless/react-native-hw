import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postWrapper: {
    marginBottom: 32,
  },
  postImage: {
    height: 240,
    borderRadius: 8,
    width: "100%",
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  postDetails: {
    flexDirection: "row",
    gap: 24,
  },
  commentBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  postSvg: {
    marginRight: 6,
  },
  postsQuantity: {
    fontSize: 16,
    lineHeight: 18,
    color: "#BDBDBD",
  },
  locationBlock: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  locationTxt: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});