import { Text, View } from "react-native";
import React from "react";
import { StyleSheet, Animated } from "react-native";
import { screensEnabled } from "react-native-screens";

interface IQuote {
  label: string;
  data;
  header?: boolean;
}

class QuoteView extends React.Component<IQuote> {
  render() {
    const { header, data } = this.props;
    const { last, highestBid, percentChange } = data;
    return (
      <View style={{ ...styles.container, height: header ? 40 : 25 }}>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: header ? "bold" : "normal" }}>
            {this.props.label}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: header ? "bold" : "normal" }}>{last}</Text>
        </View>
        <Animated.View style={styles.textContainer}>
          <Text style={{ fontWeight: header ? "bold" : "normal" }}>
            {highestBid}
          </Text>
        </Animated.View>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontWeight: header ? "bold" : "normal",
              color:
                !header &&
                (percentChange > 0
                  ? "green"
                  : percentChange == 0
                  ? "black"
                  : "red"),
            }}
          >
            {!header ? +percentChange + "%" : percentChange}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "100%",
    height: 25,
  },
  textContainer: {
    width: "25%",
    paddingLeft: 3,
    paddingRight: 3,
  },
});

export default QuoteView;
