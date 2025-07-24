import { Text, View } from "react-native";
import { getStyles } from "./HotDeals.styles";
import LinearGradient from "react-native-linear-gradient";
import HotDealsItem from "./HotDealsItem/HotDealsItem";
import { FireIcon } from "../../assets/icons";
import { hotDealsData } from "../../models/common";
import { colors } from "../../styles/colors";

const HotDealsComponent = () => {
  const styles = getStyles();
  return (
    <LinearGradient
      colors={["#3B2A7E", "#522E61"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.rootView}
    >
      <View style={styles.titleView}>
        <FireIcon />
        <Text style={styles.hotDealsText}>Hot Deals</Text>
      </View>
      <View style={styles.hotDealGrid}>
        {hotDealsData.slice(0, 3).map((deal, index) => (
          <HotDealsItem
            key={index}
            deal={deal}
            titleTextColor={deal.titleTextColor}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

export default HotDealsComponent;
