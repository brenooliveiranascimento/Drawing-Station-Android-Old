import styled from 'styled-components/native'

export const UserContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
`;

export const HelloUser = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;

export const PaitingTime = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 500;
`;

export const BtnSignOut = styled.TouchableOpacity`
  width: 50%;
  height: auto;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: none;
  border-width: 1px;
  margin-top: 10px;
  border-color: white;
  border-radius: 7px;
`;

export const ProgressContainer = styled.View`
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ProgressText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

