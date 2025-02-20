import { Source } from "react-native-fast-image";

export type MenuOption = {
  text: string;
  icon: number | Source;
};

const menuOptions: MenuOption[] = [
  {
    text: "View Profile",
    icon: require("../assets/icons/AdditionalMenu/profile_icon.png"),
  },
  {
    text: "My Cars",
    icon: require("../assets/icons/AdditionalMenu/car_icon.png"),
  },
  {
    text: "Schedules",
    icon: require("../assets/icons/AdditionalMenu/calendar_icon.png"),
  },
  {
    text: "Logout",
    icon: require("../assets/icons/AdditionalMenu/logout_icon.png"),
  },
];

export default menuOptions;
