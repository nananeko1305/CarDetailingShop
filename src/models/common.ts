import { colors } from "../styles/colors";
import { formatDate } from "../utils/dateFormatter";

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

export interface ServiceAppointment {
  basicService: BasicService;
  advancedService: AdvancedService;
  bonusService: BonusService;
  appointmentDate: string;
}

export interface BasicService {
  oilChange: boolean;
  oilFilterChange: boolean;
  airFilterChange: boolean;
  cabinFilterChange: boolean;
}

export interface AdvancedService {
  sparkPlugChange: boolean;
  coolantChange: boolean;
  brakesChange: boolean;
  brakeFluidChange: boolean;
}

export interface BonusService {
  checkTirePressure: boolean;
  checkOilLevel: boolean;
  checkCoolantLevel: boolean;
  checkWasherFluidLevel: boolean;
}

export const initialServiceAppointment: ServiceAppointment = {
  basicService: {
    oilChange: false,
    oilFilterChange: false,
    airFilterChange: false,
    cabinFilterChange: false,
  },
  advancedService: {
    sparkPlugChange: false,
    coolantChange: false,
    brakesChange: false,
    brakeFluidChange: false,
  },
  bonusService: {
    checkTirePressure: false,
    checkOilLevel: false,
    checkCoolantLevel: false,
    checkWasherFluidLevel: false,
  },
  appointmentDate: formatDate(new Date()),
};

export interface BasicWash {
  foamSpray: boolean;
  microPowderWash: boolean;
  waxProtection: boolean;
  demineralizedRinsing: boolean;
}

export interface InteriorDetailing {
  deepCleaning: boolean;
  wacuumCleaning: boolean;
}

export interface ExteriorDetailing {
  decontamination: boolean;
  carPolishing: boolean;
  headlightPolishing: boolean;
  ceramicProtection: boolean;
  brushWashing: boolean;
  seatProtection: boolean;
}

export interface DetailingAppointment {
  basicWash: BasicWash;
  interiorDetailing: InteriorDetailing;
  exteriorDetailing: ExteriorDetailing;
  appointmentDate: string;
}

export const interiorDetailingAppointment: DetailingAppointment = {
  basicWash: {
    foamSpray: false,
    microPowderWash: false,
    waxProtection: false,
    demineralizedRinsing: false,
  },
  interiorDetailing: {
    deepCleaning: false,
    wacuumCleaning: false,
  },
  exteriorDetailing: {
    decontamination: false,
    carPolishing: false,
    headlightPolishing: false,
    ceramicProtection: false,
    brushWashing: false,
    seatProtection: false,
  },
  appointmentDate: formatDate(new Date()),
};
