import { View, Text, ImageBackground } from "react-native";
import { getStyles } from "./YourCarGarageItem.styles";
import { Car } from "../../../models/common";

interface YourCarGarageItemProps {
  car: Car;
}

const YourCarGarageItem = ({ car }: YourCarGarageItemProps) => {
  const styles = getStyles();
  return (
    <ImageBackground
      style={styles.rootView}
      source={car.image}
      resizeMode="cover"
    >
      <View style={styles.floatingInformationWrapper}>
        <View style={styles.floatingInformationView}>
          <Text style={styles.infoText}>Brand: {car.brand}</Text>
          <Text style={styles.infoText}>Model: {car.model}</Text>
          <Text style={styles.infoText}>Year: {car.year}</Text>
          <Text style={styles.infoText}>Engine: {car.engine}</Text>
          <Text style={styles.infoText}>Fuel Type: {car.fuelType}</Text>
          <Text style={styles.infoText}>Power: {car.power}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default YourCarGarageItem;
