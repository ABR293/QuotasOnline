import { Text, View, Button, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import DataRefreshService from "../services/data-refresh-service";
import quotes from "../store/quotes";
import { observer } from "mobx-react";
import QuoteView from "../components/quoteView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

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
      <Container>
        <QuoteView
          label={"Quote"}
          data={{
            last: "Last",
            highestBid: "Highest Bid",
            percentChange: "Percent Change",
          }}
          header={true}
        />
        <InfoLabel isError={!!quotes.error}>
          <InfoText isError={!!quotes.error}>
            {quotes.error
              ? "Произошла ошибка! Попробуйте позже!"
              : quotes.loading
              ? "loading"
              : "LastUpdate: " + quotes.lastUpdate}
          </InfoText>
        </InfoLabel>
        <View></View>
        {quotes.loading || quotes.error ? (
          <Loader size="large"></Loader>
        ) : (
          <List
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
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: 95%;
  margin: auto;
  margin-bottom: 15%;
`;

{
  /* <View
style={{
  ...styles.infoLabel,
  backgroundColor: quotes.error ? "red" : "#95b2c2",
}} */
}

const InfoLabel = styled.View`
  width: 100%;
  height: 25;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 5;
  background-color: ${({ isError = false }) => (isError ? "red" : "#95b2c2")};
`;

const InfoText = styled.Text`
  color: ${({ isError = false }) => (isError ? "white" : "black")};
`;

const Loader = styled.ActivityIndicator`
  width: 100%;
  height: 85%;
`;

const List = styled.FlatList`
  height: 100%;
`;

// const Container = styled.View`
//   flex: 1;
//   align-items: "flex-start";
//   justify-content: "flex-start";
// `;

// const dataContainer = styled.

export default observer(DataPage);
