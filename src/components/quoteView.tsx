import React from "react";
import styled from "styled-components/native";
import AnimatedLabel from "./AnimatedLabel";

interface IQuote {
  label: string;
  data;
  header?: boolean;
}

class QuoteView extends React.Component<IQuote> {
  condition = false;
  componentDidUpdate(): void {
    this.condition = false;
    setTimeout(() => (this.condition = true), 100);
  }
  render() {
    const { header, data, label } = this.props;
    const { last, highestBid, percentChange } = data;
    return (
      <Container isHeader={header}>
        <TextContainer>
          {header ? <Header>{label}</Header> : <AnimatedLabel text={label} />}
        </TextContainer>
        <TextContainer>
          {header ? <Header>{last}</Header> : <AnimatedLabel text={last} />}
        </TextContainer>
        <TextContainer>
          {header ? (
            <Header>{highestBid}</Header>
          ) : (
            <AnimatedLabel text={highestBid} />
          )}
        </TextContainer>
        <TextContainer>
          {header ? (
            <Header>{percentChange}</Header>
          ) : (
            <AnimatedLabel
              text={`${+percentChange} %`}
              color={
                !header &&
                (percentChange > 0
                  ? "green"
                  : percentChange == 0
                  ? "black"
                  : "red")
              }
            />
          )}
        </TextContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  backgroundcolor: #fff;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom-color: lightgray;
  border-bottom-width: 1;
  width: 100%;
  height: ${({ isHeader = false }) => (isHeader ? "50" : "25")};
`;

const TextContainer = styled.View`
  width: 24%;
  padding-left: 3;
  padding-right: 3;
`;

const Header = styled.Text`
  font-weight: bold;
  font-size: 15;
`;

export default QuoteView;
