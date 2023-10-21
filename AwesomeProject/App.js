import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SvgBack } from "./src/Images/Svg";

import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { Home } from "./src/Screens/Home/Home";
import { CommentsScreen } from "./src/Screens/CommentsScreen/CommentsScreen";

const MainStack = createStackNavigator(); 

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
 <NavigationContainer>
      <MainStack.Navigator style={styles.container} initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            title: "Коментарі",
            headerTitleStyle: {
              fontSize: 17,
              textAlign: "center",
              fontFamily: "Roboto-Medium",
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backBtn}
                // onPress={() => navigation.navigate("PostsScreen")}
                onPress={() => navigation.goBack()}
              >
                <SvgBack />
              </TouchableOpacity>
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 32,
  },
  backBtn: { marginLeft: 16 },
});