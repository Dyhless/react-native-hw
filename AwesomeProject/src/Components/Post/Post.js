import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SvgComent, SvgLocation } from "../../Images/Svg";

import { styles } from "./Post.styles";

export const Post = ({ image, title, comentQuantity, location }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.postWrapper}>
      <Image style={styles.postImage} source={image} />
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postDetails}>
        <TouchableOpacity
          style={styles.commentBlock}
          onPress={() => navigation.navigate("Comments")}
        >
          <SvgComent style={styles.postSvg} />
          <Text style={styles.postsQuantity}>{comentQuantity}</Text>
        </TouchableOpacity>
        <View style={styles.locationBlock}>
          <SvgLocation style={styles.postSvg} />
          <Text style={styles.locationTxt}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

