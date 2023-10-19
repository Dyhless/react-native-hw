import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgAdd } from "../../Images/Svg";

const validationSchema = object().shape({
  login: string().required("Логін є обов'язковим полем"),
  email: string()
    .email("Невірний формат електронної пошти")
    .required("Email є обов'язковим полем"),
  password: string()
    .min(6, "Пароль повинен містити принаймні 6 символів")
    .required("Пароль є обов'язковим полем"),
});

export const RegistrationScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(false);

  const addAvatar = (e) => {
    e.preventDefault();
  };

  const showPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const onSubmit = ({ email, login, password }) => {
    console.log({
      Login: login,
      Email: email,
      Password: password,
    });

    setLogin("");
    setEmail("");
    setPassword("");
    reset();

    navigation.navigate("Home", {
      screen: "PostsScreen",
      // params: {
      //   login: login,
      //   email: email,
      // },
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
          <View style={styles.avatar}>
            <Image
              source={require("../../Images/avatar.jpg")}
              style={styles.avatarImage}
            />
            <TouchableOpacity style={styles.addButton} onPress={addAvatar}>
              <SvgAdd />
            </TouchableOpacity>
          </View>
          <Text style={styles.registrationTitle}>Реєстрація</Text>
          <View style={styles.formWrapper}>
            {errors.login && <Text>{errors.login.message}</Text>}
            <Controller
              control={control}
              name="login"
              render={({ field }) => (
                <TextInput
                  style={[styles.input, isLoginFocused && styles.inputFocused]}
                  placeholder="Логін"
                  placeholderTextColor={"#BDBDBD"}
                  value={login}
                  onChangeText={(value) => {
                    setLogin(value);
                    field.onChange(value);
                  }}
                  onFocus={() => setIsLoginFocused(true)}
                  onBlur={() => setIsLoginFocused(false)}
                />
              )}
            />

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
        <View style={styles.BtnWrap}>
          <TouchableOpacity
            style={styles.registrationButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.registrationButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registrationLinkText}>
              Вже є акаунт? Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

