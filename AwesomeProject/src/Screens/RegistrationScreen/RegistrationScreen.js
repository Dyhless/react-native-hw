import { useState } from "react";

import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { styles } from "./RegistrationScreen.styles";

export const RegistrationScreen = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const addAvatar = (e) => {
    e.preventDefault();
  };

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
        <View style={styles.avatar}>
          <Image
            source={require("../../Images/avatar.jpg")}
            style={styles.avatarImage}
          />
          <TouchableOpacity style={styles.addButton} onPress={addAvatar}>
            <Image
              source={require("../../Images/added.png")}
              style={styles.addButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.registrationTitle}>Реєстрація</Text>
        <View style={styles.formWrapper}>
          <TextInput
            style={[styles.input, isLoginFocused && styles.inputFocused]}
            placeholder="Логін"
            placeholderTextColor={"#BDBDBD"}
            name="login"
            onFocus={() => setIsLoginFocused(true)}
            onBlur={() => setIsLoginFocused(false)}
          />
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
      <View style={styles.BtnWrap}>
        <TouchableOpacity style={styles.registrationButton} onPress={signUp}>
          <Text style={styles.registrationButtonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registrationLinkText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

