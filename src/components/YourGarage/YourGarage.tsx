import { View, Text } from "react-native";
import { getStyles } from "./YourGarage.styles";
import { CarArrowLeftIcon, CarArrowRightIcon } from "../../assets/icons";
import YourCarGarageItem from "./YourGarageCarItem/YourCarGarageItem";
import { cars } from "../../models/common";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";

const YourGarageComponent = () => {
  const styles = getStyles();
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  const handleNextCar = () => {
    setSelectedCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePreviousCar = () => {
    setSelectedCarIndex(
      (prevIndex) => (prevIndex - 1 + cars.length) % cars.length
    );
  };

  return (
    <View style={styles.rootContainer}>
      <LinearGradient
        colors={["#3B2A7E", "#522E61"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        // style={styles.button}
      >
        <View style={styles.titleView}>
          <Text style={styles.yourGarageText}>YourGarage</Text>
          <View style={styles.iconsView}>
            <CarArrowLeftIcon onPress={handlePreviousCar} />
            <CarArrowRightIcon onPress={handleNextCar} />
          </View>
        </View>
      </LinearGradient>
      <YourCarGarageItem car={cars[selectedCarIndex]} />
    </View>
  );
};

export default YourGarageComponent;
