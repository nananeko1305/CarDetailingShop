import { NavigationAction } from "@react-navigation/native";

export interface NavigationType {
  //   navigate: (routeName: string, store?: {}, discount?: {}) => void;
  navigate: (routeName: string) => void;
  goBack: () => void;
  dispatch: (action: NavigationAction) => void;
  replace: (routeName: string) => void;
}
