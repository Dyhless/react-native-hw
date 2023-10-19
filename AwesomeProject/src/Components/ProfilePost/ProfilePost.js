import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SvgLocation, SvgLike, SvgCommentColor } from "../../Images/Svg";

import { styles } from "./ProfilePost.styles";

export const ProfilePost = ({
  image,
  title,
  comentQuantity,
  location,
  likes,
}) => {
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
          <SvgCommentColor style={styles.postSvg} />
          <Text style={styles.postsQuantity}>{comentQuantity}</Text>
        </TouchableOpacity>
        <View style={styles.likesBlock}>
          <SvgLike style={styles.svgLike} />
          <Text style={styles.postsLikes}>{likes}</Text>
        </View>
        <View style={styles.locationBlock}>
          <SvgLocation style={styles.postSvg} />
          <Text style={styles.locationTxt}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

