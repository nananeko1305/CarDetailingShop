import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { useState } from "react";

const GenderPicker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gender, setGender] = useState("");

  const handleOnModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Pressable style={styles.rootContainer} onPress={handleOnModalOpen}>
      <Text style={styles.text}>Driver Gender </Text>
      <Modal
        animationType="fade"
        visible={isModalOpen}
        style={styles.modalContainer}
      >
        <Pressable onPress={handleOnModalOpen}>
          <Text>aaaasdasd</Text>
        </Pressable>
      </Modal>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    width: "45%",
  },

  genderPicker: {
    backgroundColor: colors.formInputFieldBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.textColor,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: 24,
  },
  modalContainer: {
    position: "absolute",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 300,
    alignItems: "center",
  },
});

export default GenderPicker;
