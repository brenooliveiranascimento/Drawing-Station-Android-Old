import styled from 'styled-components/native'

export const BtnContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: auto;
  flex-direction: row;
`;

export const BtnDificulty = styled.TouchableOpacity`
  width: 100px;
  height: auto;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-radius: 7px;
  border-color: white;
  background-color: rgba(0,0,0,0.3);
`;

export const TextBtn = styled.Text`
  color: white;
`;