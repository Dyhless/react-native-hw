import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ProfilePost } from "../../Components/ProfilePost/ProfilePost";
import { SvgAdd, SvgLogOut } from "../../Images/Svg";

import { styles } from "./ProfileScreen.styles";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const addAvatar = (event) => {
    event.preventDefault();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Images/bg-photo.png")}
        style={styles.imageBackground}
        imageStyle={{}}
      >
        <View style={styles.profileWrapper}>
          <TouchableOpacity
            style={styles.logOutBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <SvgLogOut />
          </TouchableOpacity>
        </View>
        <View style={styles.avatar}>
          <Image
            source={require("../../Images/avatar.jpg")}
            style={styles.avatarImage}
          />
          <TouchableOpacity style={styles.addButton} onPress={addAvatar}>
            <SvgAdd />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>Natali Romanova</Text>
        <View style={styles.allPostsWrapper}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <ProfilePost
              image={require("../../Images/forest.png")}
              title={"Ліс"}
              comentQuantity={8}
              location={"Ukraine"}
              likes={153}
            />
            <ProfilePost
              image={require("../../Images/sunset.png")}
              title={"Захід на Чорному морі"}
              comentQuantity={3}
              location={"Ukraine"}
              likes={200}
            />
            <ProfilePost
              image={require("../../Images/house.png")}
              title={"Старий будиночок у Венеції"}
              comentQuantity={50}
              location={"Italy"}
              likes={200}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

