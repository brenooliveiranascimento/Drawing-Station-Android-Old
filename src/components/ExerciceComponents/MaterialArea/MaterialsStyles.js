import styled from 'styled-components/native';

export const MaterialsContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const MultiExerciceSelectBtn = styled.TouchableOpacity`
  width: 60px;
  height: auto;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin:5px;
  border-color: #aaa;
`;

export const MultiBtnArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextBtnShow = styled.Text`
  font-size: 18px;
  color: ${({nowColor, color}) => nowColor === color ? "#fff" : "#aaa"};
`;
