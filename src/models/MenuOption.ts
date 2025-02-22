import { Source } from "react-native-fast-image";

export type MenuOption = {
  text: string;
  icon: number | Source;
  uri: string;
};

const menuOptions: MenuOption[] = [
  {
    text: "View Profile",
    icon: require("../assets/icons/AdditionalMenu/profile_icon.png"),
    uri: "ProfileScreen",
  },
  {
    text: "My Cars",
    icon: require("../assets/icons/AdditionalMenu/car_icon.png"),
    uri: "",
  },
  {
    text: "Schedules",
    icon: require("../assets/icons/AdditionalMenu/calendar_icon.png"),
    uri: "",
  },
  {
    text: "Logout",
    icon: require("../assets/icons/AdditionalMenu/logout_icon.png"),
    uri: "",
  },
];

export default menuOptions;
