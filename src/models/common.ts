import { colors } from "../styles/colors";

export interface Car {
  brand: string;
  model: string;
  year: number;
  engine: string;
  fuelType: string;
  power: string;
  image: string;
}

export const cars: Car[] = [
  {
    brand: "Opel",
    model: "Astra",
    year: 2005,
    engine: "1.6",
    fuelType: "Petrol",
    power: "77KW/105HP",
    image: require("../assets/images/CarTest.png"),
  },
  {
    brand: "Opel",
    model: "Astra J",
    year: 2012,
    engine: "2.0",
    fuelType: "Petrol",
    power: "208KW/280HP",
    image: require("../assets/images/astraj.jpg"),
  },
  {
    brand: "Opel",
    model: "Astra J",
    year: 2012,
    engine: "2.0",
    fuelType: "Petrol",
    power: "208KW/280HP",
    image: require("../assets/images/astraj.jpg"),
  },
];

export interface HotDeal {
  title: string;
  options: string[];
  hotDeal: boolean;
  titleTextColor: string;
}

export const hotDealsData: HotDeal[] = [
  {
    title: "Basic Pack",
    options: ["1X Basic Service", "1X Car Wash", "1X Detailing"],
    hotDeal: false,
    titleTextColor: colors.inactiveBottomTabLabelColor,
  },
  {
    title: "Golden Pack",
    options: ["2X Basic Service", "2X Car Wash", "2X Detailing"],
    hotDeal: true,
    titleTextColor: colors.gold,
  },
  {
    title: "Premium Pack",
    options: ["3X Basic Service", "3X Car Wash", "3X Detailing"],
    hotDeal: false,
    titleTextColor: colors.darkGrayText,
  },
];
