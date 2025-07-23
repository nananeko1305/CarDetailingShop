import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ServiceScreen from "../screens/ServiceScreen";
import DetailingScreen from "../screens/DetailingScreen";
import { Image, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { colors } from "../styles/colors";
import AdditionalMenuStackNavigation from "./AdditionalMenuStackNavigation";
import HomeScreen from "../screens/HomeScreen";
import { normalizeFont } from "../utils/normalize";

const Tab = createBottomTabNavigator();

const BottomBarNavitaion = () => {
  return (
    <View style={{ backgroundColor: colors.bottomBarBackground, flex: 1 }}>
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
            borderRadius: 20,
            borderWidth: 1,
            borderColor: colors.inactiveBottomTabLabelColor,
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
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
                ? require("../assets/icons/HomeIcon/home_icon_active.png")
                : require("../assets/icons/HomeIcon/home_icon_inactive.png");
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
                ? require("../assets/icons/ServiceIcon/service_icon_active.png")
                : require("../assets/icons/ServiceIcon/service_icon_inactive.png");

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
          name="AdditionalMenu"
          component={AdditionalMenuStackNavigation}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              const tabBarIcon = focused
                ? require("../assets/icons/MenuIcon/menu_icon_active.png")
                : require("../assets/icons/MenuIcon/menu_icon_inactive.png");

              return TabBarIcon(tabBarIcon, size, color, "MENU");
            },
          }}
        />
      </Tab.Navigator>
    </View>
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
    fontSize: normalizeFont(20),
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
