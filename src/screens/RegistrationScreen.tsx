import {StyleSheet, Text, View} from 'react-native';

const ReistrationScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello Registration Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    flex: 1,
  },
});

export default ReistrationScreen;
