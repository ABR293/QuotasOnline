import { Text, View, Button, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import DataRefreshService from "../services/data-refresh-service";
import quotes from "../store/quotes";
import { observer } from "mobx-react";
import QuoteView from "../components/quoteView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface DescriptionPropsType {
  navigation: any;
}

class DataPage extends React.Component<DescriptionPropsType> {
  dataRefreshService = new DataRefreshService();

  componentDidMount(): void {
    quotes.fetchData(true);
    this.dataRefreshService.enableDataRefresher();
  }

  componentWillUnmount(): void {
    this.dataRefreshService.disableDataRefresher();
  }

  render() {
    return (
      <SafeAreaView style={styles.dataContainer}>
        <QuoteView
          label={"Quote"}
          data={{
            last: "Last",
            highestBid: "Highest Bid",
            percentChange: "Percent Change",
          }}
          header={true}
        />
        <View
          style={{
            ...styles.infoLabel,
            backgroundColor: quotes.error ? "red" : "#95b2c2",
          }}
        >
          <Text>
            {quotes.error
              ? "Произошла ошибка! Попробуйте позже!"
              : quotes.loading
              ? "loading"
              : "LastUpdate: " + quotes.lastUpdate}
          </Text>
        </View>
        <View></View>
        {quotes.loading || quotes.error ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            style={styles.test}
            data={Object.keys(quotes.data)}
            renderItem={({ item }) => (
              <QuoteView label={item} data={quotes.data[item]} />
            )}
            keyExtractor={(i) => i + ""}
          />
        )}

        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dataContainer: {
    width: "96%",
    marginLeft: 10,
  },
  infoLabel: {
    width: "100%",
    height: 25,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 5,
  },
  loader: {
    margin: 40,
    width: 100,
    height: 100,
  },

  test: {
    height: 500,
  },
});

export default observer(DataPage);
