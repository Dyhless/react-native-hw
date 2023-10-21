import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgCamera, SvgLocation, SvgTrash } from "../../Images/Svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./CreatePostsScreen.styles";

const schema = yup.object().shape({
  title: yup.string().required("Введіть назву публікації"),
  location: yup.string(),
});

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitButtonActive, setSubmitButtonActive] = useState(false);

  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const [image, setImage] = useState("");

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (isValid) {
      setSubmitButtonActive(true);
    } else {
      setSubmitButtonActive(false);
    }
  }, [isValid]);

  const addPhoto = (e) => {
    e.preventDefault();
  };

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setImage("");
    reset();
  };

  const onSubmit = ({ title, location }) => {
    console.log({
      Title: title,
      Location: location,
    });

    resetForm();
    navigation.navigate("PostsScreen");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screenContainer}>
        <View style={styles.wrapper}>
          <View style={styles.contentImgBlock}>
            <View style={styles.imageWrapper}>
              <TouchableOpacity
                style={styles.addPhotoBtn}
                activeOpacity={0.7}
                onPress={addPhoto}
              >
                <SvgCamera width={24} height={24} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.text}>
                {!image ? "Завантажте фото" : "Редагувати фото"}
              </Text>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "position" : "height"}
            keyboardVerticalOffset={80}
          >
            <View>
              <View style={styles.inputWrapper}>
                {errors.title && <Text>{errors.title.message}</Text>}
                <Controller
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <TextInput
                      style={[
                        styles.input,
                        isFocusedInput && styles.inputFocused,
                      ]}
                      placeholder="Назва..."
                      value={title}
                      onChangeText={(value) => {
                        setTitle(value);
                        field.onChange(value);
                      }}
                      onFocus={() => setIsFocusedInput(true)}
                      onBlur={() => setIsFocusedInput(false)}
                    />
                  )}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Controller
                  control={control}
                  name="location"
                  render={({ field }) => (
                    <>
                      <SvgLocation
                        width={24}
                        height={24}
                        style={styles.locationSvg}
                      />
                      <TextInput
                        style={[
                          styles.locationInput,
                          isFocusedInput && styles.inputFocused,
                        ]}
                        value={location}
                        placeholder="Місцевість"
                        onChangeText={(value) => {
                          setLocation(value);
                          field.onChange(value);
                        }}
                        onFocus={() => setIsFocusedInput(true)}
                        onBlur={() => setIsFocusedInput(false)}
                      />
                    </>
                  )}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              styles.submitBtn,
              !submitButtonActive && styles.submitBtnDisable,
            ]}
            onPress={handleSubmit(onSubmit)}
            disabled={!submitButtonActive}
          >
            <Text
              style={[
                styles.btnTitle,
                !submitButtonActive && styles.btnTitleDisable,
              ]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={resetForm}>
            <SvgTrash width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

