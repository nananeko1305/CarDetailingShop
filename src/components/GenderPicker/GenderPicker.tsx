import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { getStyles } from "./GenderPicker.styles";
import LinearGradient from "react-native-linear-gradient";
import { CrossIcon } from "../../assets/icons";
import { Gender } from "../../models/common";

const GenderPicker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gender, setGender] = useState(Gender.Male);

  const styles = getStyles();

  const handleOnModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOnGenderChange = (selected: Gender) => {
    setGender(selected);
    setIsModalOpen(false);
  };

  return (
    <View style={styles.rootView}>
      <Text style={styles.text}>Gender </Text>
      <TouchableOpacity
        onPress={handleOnModalOpen}
        style={styles.genderSelector}
      >
        <LinearGradient
          colors={["#3B2A7E", "#522E61"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.genderSelectorText}>{gender}</Text>
          <Modal
            animationType="fade"
            visible={isModalOpen}
            style={styles.modalContainer}
            transparent={true}
          >
            <LinearGradient
              colors={["#3B2A7E", "#522E61"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.modalWrapper}
            >
              <View style={styles.modalContent}>
                <TouchableOpacity
                  onPress={handleOnModalOpen}
                  style={styles.closeButton}
                >
                  <CrossIcon />
                </TouchableOpacity>

                <View style={styles.modalOptions}>
                  <TouchableOpacity
                    onPress={() => handleOnGenderChange(Gender.Male)}
                  >
                    <Text style={styles.modalOption}>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleOnGenderChange(Gender.Female)}
                  >
                    <Text style={styles.modalOption}>Female</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </Modal>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GenderPicker;
