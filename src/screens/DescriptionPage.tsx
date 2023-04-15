import { Text, View, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react";

interface DataPageType {
  navigation: any;
}
const DataPage: React.FC<DataPageType> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>QuotaOnline</Text>
      <Text style={styles.descriptionHeader}>About us</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Button
        title="Show quotas online"
        onPress={() => navigation.navigate("Quotas")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#2aa6eb",
    fontSize: 40,
    fontFamily: "Arial",
    marginBottom: 60,
  },
  descriptionHeader: {
    color: "#1a0c30",
    fontSize: 20,
    fontFamily: "Arial",
  },
  description: {
    fontSize: 17,
    fontFamily: "Arial",
    margin: 30,
    textAlign: "justify",
  },
});

export default observer(DataPage);
