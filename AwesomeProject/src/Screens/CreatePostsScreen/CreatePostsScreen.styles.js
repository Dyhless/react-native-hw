import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#fff",
    minHeight: 812,
  },
  wrapper: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34 + 83,
    marginRight: "auto",
    marginLeft: "auto",
  },
  contentImgBlock: { marginBottom: 32 },
  imageWrapper: {
    width: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  addPhotoBtn: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: 15,
    paddingTop: 16,
    marginBottom: 16,
  },
  inputFocused: {
    color: "#212121",
  },
  locationSvg: {
    position: "absolute",
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
    marginTop: -13,
  },
  locationInput: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    minWidth: 343,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingLeft: 28,
    paddingBottom: 15,
    paddingTop: 16,
  },
  submitBtnDisable: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    minWidth: 343,
    padding: 16,
    marginTop: 27,
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    color: "#fff",
    borderRadius: 100,
    minWidth: 343,
    padding: 16,
    marginTop: 27,
  },
  btnTitleDisable: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  btnTitle: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
  deleteBtn: {
    width: 70,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "#F6F6F6",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 120,
  },
});