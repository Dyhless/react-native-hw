import { useState } from "react";

import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { styles } from "./LoginScreen.styles";

export const LoginScreen = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();
  };

  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <ImageBackground
      source={require("../../Images/bg-photo.png")}
      style={styles.imageBackground}
      imageStyle={{
        minHeight: 812,
      }}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.loginTitle}>Увійти</Text>
        <View style={styles.formWrapper}>
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholderTextColor={"#BDBDBD"}
            placeholder="Адреса електронної пошти"
            name="email"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <View style={styles.lastInputWrapper}>
            <TextInput
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={true}
              placeholder="Пароль"
              name="password"
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            ></TextInput>
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={showPassword}
            >
              <Text style={styles.showPasswordText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.LoginBtnWrap}>
        <TouchableOpacity style={styles.registrationButton} onPress={signUp}>
          <Text style={styles.registrationButtonText}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.registrationTextWrapper}>
          <Text style={styles.registrationLinkText}>Немає акаунту?</Text>
          <TouchableOpacity>
            <Text style={styles.registrationLink}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

