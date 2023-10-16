import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    position: "relative",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: 489,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 32,
  },

  loginTitle: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  formContainer: {
    position: "relative",
  },
  input: {
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#000",
  },
  showPasswordButton: {
    fontSize: 16,
  },
  lastInputWrapper: {
    position: "relative",
  },

  showPasswordText: {
    position: "absolute",
    top: -51,
    right: 16,
    color: "#1B4371",
  },
  LoginBtnWrap: {
    position: "absolute",
    width: "100%",
    top: 538 + 44,
    paddingLeft: 16,
    paddingRight: 16,
  },
  registrationButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    padding: 16,
    marginTop: 27,
    marginBottom: 16,
  },
  registrationButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  registrationTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    gap: 4,
  },
  registrationLinkText: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
  },
  registrationLink: {
    fontSize: 16,
    color: "#1B4371",
    textDecorationLine: "underline",
  },
});