import { Text, View } from "react-native";
import { HotDeal } from "../../../models/common";
import { getStyles } from "./HotDealsItem.styles";

interface HotDealsItemProps {
  deal: HotDeal;
  titleTextColor: string;
}

const HotDealsItem = ({ deal, titleTextColor }: HotDealsItemProps) => {
  const styles = getStyles();
  return (
    <View style={deal.hotDeal ? styles.hotDealView : styles.dealView}>
      <View style={deal.hotDeal ? styles.hotDealTitleView : styles.titleView}>
        <Text style={[styles.titleText, { color: titleTextColor }]}>
          {deal.title}
        </Text>
      </View>
      <View style={styles.optionsView}>
        {deal.options.map((option, index) => (
          <Text key={index} style={styles.optionText}>
            {option}
          </Text>
        ))}
      </View>
      {deal.hotDeal ? (
        <View style={styles.popularView}>
          <Text style={styles.popularText}>Most Popular</Text>
        </View>
      ) : (
        <View style={styles.regularView} />
      )}
    </View>
  );
};

export default HotDealsItem;
