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
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: white;
  background-color: ${({dificulty, nowDificulty}) => dificulty === nowDificulty ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.7)"};
  border-top-left-radius: 7px ;
  border-top-right-radius: 7px ;
`;

export const TextBtn = styled.Text`
  color: white;
  font-size: 14px;
`;