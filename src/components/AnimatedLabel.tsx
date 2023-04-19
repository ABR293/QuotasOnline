import React, { Component } from "react";
import { Animated } from "react-native";

class AnimatedLabel extends Component<any> {
  spinValue = new Animated.Value(0);

  spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  routeIn = () => {
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  routeOut = () => {
    Animated.timing(this.spinValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  shouldComponentUpdate(nextProps: Readonly<any>): boolean {
    return nextProps.text !== this.props.text;
  }

  render() {
    this.routeIn();
    setTimeout(this.routeOut, 10);
    return (
      <Animated.Text
        style={[
          { fontSize: 12, color: this.props.color },
          { transform: [{ rotateX: this.spin }] },
        ]}
      >
        {this.props.text}
      </Animated.Text>
    );
  }
}

export default AnimatedLabel;
