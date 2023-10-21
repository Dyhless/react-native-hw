import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
} from "react-native";
import { Comment } from "../../Components/Comment/Comment";
import { SvgPostSubmit } from "../../Images/Svg";

import { styles } from "./CommentsScreen.styles";

const CommentSchema = yup.object().shape({
  comment: yup.string().required("Будь ласка, введіть коментар"),
});

/**
 * Екран коментарів.
 */
export const CommentsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CommentSchema),
  });

  const [isFocusedInput, setIsFocusedInput] = useState(false);
  const [comment, setComment] = useState("");

  /**
   * Обробник відправки коментаря.
   * @param {string} comment - Текст коментаря.
   */
  const handleCommentSubmit = (comment) => {
    setComment(comment);
    console.log(comment);
    setComment("");
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={80}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <Image style={styles.img} source={require("../../Images/sunset.png")} />
          <View style={styles.commentWrapper}>
            {/* Ось ваш список коментарів */}
          </View>
        </ScrollView>
        <View style={styles.formContainer}>
          {errors.comment && <Text>{errors.comment.message}</Text>}
          <Controller
            control={control}
            name="comment"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={[styles.input, isFocusedInput && styles.inputFocused]}
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Коментувати..."
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setIsFocusedInput(true)}
                  onBlur={() => setIsFocusedInput(false)}
                />
                <TouchableOpacity
                  style={styles.postBtn}
                  onPress={handleSubmit(handleCommentSubmit)}
                >
                  <SvgPostSubmit />
                </TouchableOpacity>
              </>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
