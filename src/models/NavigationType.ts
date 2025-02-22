import { NavigationAction } from "@react-navigation/native";

export interface NavigationType {
  navigate: (routeName: string) => void;
  goBack: () => void;
  dispatch: (action: NavigationAction) => void;
  replace: (routeName: string) => void;
  reset: (options: {
    index: number;
    routes: { name: string; params?: object }[];
  }) => void;
}
