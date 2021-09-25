import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.unitSystem}>
      <Picker
        mode="dropdown"
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="C" value="metric" />
        <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 40,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
