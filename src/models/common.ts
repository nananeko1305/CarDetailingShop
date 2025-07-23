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
