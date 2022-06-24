import styled from 'styled-components/native';

export const BtnPrevNextcontainer = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  height: auto;
  justify-content: space-around;
`;

export const BtnPrev = styled.TouchableOpacity`
  width: 50%;
  height: auto;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: rgba(0,0,0,0.3);
  border-right-width: 0.5px;
  flex-direction: row;
`;

export const BtnNext = styled.TouchableOpacity`
  width: 50%;
  border-left-width: 0.5px;
  justify-content: space-around;
  height: auto;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  justify-content: center;
  flex-direction: row;
`;

export const AreaColum = styled.View`
  flex-direction: column;
  flex:1
`;

export const TextBtn = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
  align-self: flex-end;
`;

export const TextBtnName = styled.Text`
  color: #aaa;
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
  align-self: flex-end;
`;

export const TextBtnNext = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  align-self: flex-start;
  margin-left: 10px;
`;

export const TextBtnNameNext = styled.Text`
  align-self: flex-start;
  margin-left: 10px;
  color: #aaa;
  font-size: 14px;
  font-weight: 400;
`;
