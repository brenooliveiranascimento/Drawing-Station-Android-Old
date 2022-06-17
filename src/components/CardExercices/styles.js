import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: rgba(0,0,0,0.3);
  align-self: center;
  margin: 10px;
  z-index: 99;
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius:7px;
  opacity: 100;
  position: absolute;
  align-self: center;
  margin-top: 20px;
`;

export const CartText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  bottom: 15px;
  left: 10px;
`;
