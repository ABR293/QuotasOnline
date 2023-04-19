import React from "react";
import styled from "styled-components/native";

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
      <Container isHeader={header}>
        <TextContainer>
          <MainText isHeader={header}>{this.props.label}</MainText>
        </TextContainer>
        <TextContainer>
          <MainText isHeader={header}>{last}</MainText>
        </TextContainer>
        <TextContainer>
          <MainText isHeader={header}>{highestBid}</MainText>
        </TextContainer>
        <TextContainer>
          <MainText
            isHeader={header}
            color={
              !header &&
              (percentChange > 0
                ? "green"
                : percentChange == 0
                ? "black"
                : "red")
            }
          >
            {!header ? +percentChange + "%" : percentChange}
          </MainText>
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

const MainText = styled.Text`
  font-weight: ${({ isHeader = false }) => (isHeader ? "bold" : "normal")};
  font-size: 12;
  color: ${({ color }) => color};
`;

export default QuoteView;
