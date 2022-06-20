import styled from 'styled-components/native';

export const BackGround = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.7);
`;

export const ModalContainer = styled.View`
  width: 80%;
  height: 70%;
  border-radius: 10px;
  background-color: rgba(90,30,50,0.9);
  align-self: center;
  margin-top: 10%;
  padding: 10px;
`;

export const ModalHEaderBtn = styled.TouchableOpacity`
  width: 40px;
  height: auto;
  padding: 10px;
  background-color: rgba(0,0,0,0.2);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: auto;
  padding: 10px;
  align-items: flex-start;
`;

export const TextModal = styled.Text`
  font-size: 17px;
  color: #aaa;
  align-self: flex-start;
  margin-top: 10%;
`;

export const TextHeaderModal = styled.Text`
  font-size: 23px;
  color: #fff;
  align-self: center;
`;
