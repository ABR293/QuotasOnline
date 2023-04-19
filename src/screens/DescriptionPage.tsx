import { Button } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components/native";

interface DataPageType {
  navigation: any;
}
const DataPage: React.FC<DataPageType> = ({ navigation }) => {
  return (
    <Container>
      <Header>QuotaOnline</Header>
      <DescriptionHeader>About us</DescriptionHeader>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Description>
      <Button
        title="Show quotas online"
        onPress={() => navigation.navigate("Quotas")}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Header = styled.Text`
  color: #2aa6eb;
  font-size: 40;
  font-family: Arial;
  margin-bottom: 60;
`;
const DescriptionHeader = styled.Text`
  color: #1a0c30;
  font-size: 20;
  font-family: Arial;
`;
const Description = styled.Text`
  font-size: 17;
  font-family: Arial;
  margin-top: 30;
  margin-bottom: 40;
  text-align: justify;
  width: 85%;
`;

export default observer(DataPage);
