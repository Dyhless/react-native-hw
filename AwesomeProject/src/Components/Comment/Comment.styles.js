import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 31,
  },

  commentsBlock: {
    gap: 24,
  },
  commentItem: {
    gap: 16,
    flexDirection: "row",
    width: "100%",
  },
  commentAva: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  commentTxtPart: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.03)",
    padding: 16,
    borderEndEndRadius: 6,
    borderTopRightRadius: 6,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },
  date: {
    fontSize: 10,
    lineHeight: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    color: "#BDBDBD",
  },
});