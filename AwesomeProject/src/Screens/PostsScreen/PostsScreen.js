// import { useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
import { Post } from "../../Components/Post/Post";

import { styles } from "./PostsScreen.styles";

export const PostsScreen = () => {
  // const route = useRoute();
  // const { login, email } = route.params;

  return (
    <View style={styles.wrapper}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userAvatar}
          source={require("../../Images/avatar.jpg")}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
          {/* <Text style={styles.userName}>{login}</Text>
          <Text style={styles.userEmail}>{email}</Text> */}
        </View>
      </View>
      <View style={styles.allPostsWrapper}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Post
            image={require("../../Images/forest.png")}
            title={"Ліс"}
            comentQuantity={0}
            location={"Ivano-Frankivs'k Region, Ukraine"}
          />
          <Post
            image={require("../../Images/sunset.png")}
            title={"Захід на Чорному морі"}
            comentQuantity={0}
            location={"Ukraine"}
          />
          <Post
            image={require("../../Images/house.png")}
            title={"Старий будиночок у Венеції"}
            comentQuantity={0}
            location={"Italy"}
          />
        </ScrollView>
      </View>
    </View>
  );
};

