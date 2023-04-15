import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import DataPage from "./src/screens/DataPage";
import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescriptionPage from "./src/screens/DescriptionPage";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Description">
        <Stack.Screen name="Main" component={DescriptionPage} />
        <Stack.Screen name="Quotas" component={DataPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

export default observer(App);
