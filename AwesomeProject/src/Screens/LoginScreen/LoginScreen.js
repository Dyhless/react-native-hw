import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./LoginScreen.styles";

const validationSchema = object().shape({
  email: string()
    .email("Невірний формат електронної пошти")
    .required("Email є обов'язковим полем"),
  password: string()
    .min(6, "Пароль повинен містити принаймні 6 символів")
    .required("Пароль є обов'язковим полем"),
});

export const LoginScreen = () => {
const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(false);

  const showPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const onSubmit = ({ email, password }) => {
    console.log({
      Email: email,
      Password: password,
    });

    setEmail("");
    setPassword("");
    reset();
    navigation.navigate("Home", {
      screen: "PostsScreen",
      params: {
        email: email,
      },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../Images/bg-photo.png")}
        style={styles.imageBackground}
        imageStyle={{
          minHeight: 812,
        }}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.loginTitle}>Увійти</Text>
          <View style={styles.formWrapper}>
            {errors.email && <Text>{errors.email.message}</Text>}
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextInput
                  style={[styles.input, isEmailFocused && styles.inputFocused]}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={"#BDBDBD"}
                  value={email}
                  onChangeText={(value) => {
                    setEmail(value);
                    field.onChange(value);
                  }}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
              )}
            />

            <View style={styles.lastInputWrapper}>
              {errors.password && <Text>{errors.password.message}</Text>}
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TextInput
                    style={[
                      styles.input,
                      isPasswordFocused && styles.inputFocused,
                    ]}
                    placeholderTextColor={"#BDBDBD"}
                    placeholder="Пароль"
                    value={password}
                    secureTextEntry={!visiblePassword}
                    onChangeText={(value) => {
                      setPassword(value);
                      field.onChange(value);
                    }}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                  />
                )}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={showPassword}
              >
                <Text style={styles.showPasswordText}>
                  {!visiblePassword ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.LoginBtnWrap}>
          <TouchableOpacity
            style={styles.registrationButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.registrationButtonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.registrationTextWrapper}>
            <Text style={styles.registrationLinkText}>Немає акаунту?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.registrationLink}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

