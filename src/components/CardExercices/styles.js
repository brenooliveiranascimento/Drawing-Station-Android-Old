import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
  width: 130;
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: #807B78;
  align-self: center;
  margin: 10px;
  z-index: 99;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CardImage = styled.Image`
  width: 110px;
  height: 110px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  opacity: 100;
  position: absolute;
  align-self: center;
  top: 15px;
`;

export const CartText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  bottom: 15px;
  left: 10px;
`;
