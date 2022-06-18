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
  padding: 15px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  background-color: rgba(128,128,128,0.3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ProgressText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-self: flex-start;
`;

export const TextMessage = styled.Text `
  color: #ddd;
  align-self: flex-start;
  margin-top: 10px;
`
