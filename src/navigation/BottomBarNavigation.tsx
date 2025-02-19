import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/DetailingScreen";
import ServiceScreen from "../screens/ServiceScreen";
import DetailingScreen from "../screens/DetailingScreen";
import AdditionalMenuScreen from "../screens/AdditionalMenuScreen";
import { Image, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { colors } from "../styles/colors";

const Tab = createBottomTabNavigator();

const BottomBarNavitaion = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.activeBottomTabLabelColor,
        tabBarInactiveTintColor: colors.inactiveBottomTabLabelColor,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "flex",
          flex: 1,
          maxHeight: 80,
          alignItems: "center",
          justifyContent: "center",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          backgroundColor: colors.bottomBarBackground,
        },
        tabBarIconStyle: {
          flex: 1,
          height: 50,
          width: 45,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            const tabBarIcon = focused
              ? require("../assets/icons/homeIcon/home_icon_active.png")
              : require("../assets/icons/homeIcon/home_icon_inactive.png");

            return TabBarIcon(tabBarIcon, size, color, "HOME");
          },
        }}
      />
      <Tab.Screen
        name="ServiceScreen"
        component={ServiceScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            const tabBarIcon = focused
              ? require("../assets/icons/serviceIcon/service_icon_active.png")
              : require("../assets/icons/serviceIcon/service_icon_inactive.png");

            return TabBarIcon(tabBarIcon, size, color, "SERVICE");
          },
        }}
      />
      <Tab.Screen
        name="nothing"
        component={() => null}
        options={{
          tabBarButton: (props) => (
            <View {...props} pointerEvents="none">
              <FastImage
                source={require("../assets/images/logo.png")}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.logo}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DetailingScreen"
        component={DetailingScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            const tabBarIcon = focused
              ? require("../assets/icons/DetailingIcon/detailing_icon_active.png")
              : require("../assets/icons/DetailingIcon/detailing_icon_inactive.png");

            return TabBarIcon(tabBarIcon, size, color, "SERVICE");
          },
        }}
      />
      <Tab.Screen
        name="AdditionalMenuScreen"
        component={AdditionalMenuScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            const tabBarIcon = focused
              ? require("../assets/icons/MenuIcon/menu_icon_active.png")
              : require("../assets/icons/MenuIcon/menu_icon_inactive.png");

            return TabBarIcon(tabBarIcon, size, color, "SERVICE");
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIcon: {},
  tabBarTitle: {
    fontFamily: "Teko-Regular",
    fontSize: 20,
  },
  logo: {
    height: 70,
    width: 70,
  },
});

export default BottomBarNavitaion;

function TabBarIcon(
  tabBarIcon: any,
  size: number,
  color: string,
  text: string
) {
  return (
    <View style={styles.rootContainer}>
      <FastImage
        source={tabBarIcon}
        resizeMode={FastImage.resizeMode.contain}
        style={[styles.tabBarIcon, { width: size, height: size }]}
      />
      <Text style={[styles.tabBarTitle, { color: color }]}>{text}</Text>
    </View>
  );
}
