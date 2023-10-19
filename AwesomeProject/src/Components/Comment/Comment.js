import { Image, Text, View } from "react-native";

import { styles } from "./Comment.styles";

export const Comment = ({ avatar, text, date, style }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.commentsBlock}>
        <View style={[styles.commentItem, style]}>
          <Image style={styles.commentAva} source={avatar} />
          <View style={styles.commentTxtPart}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

