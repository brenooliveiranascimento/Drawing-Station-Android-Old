import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BackgroundExercice = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const ImageLogo = styled.Image`
  height: 100px;
  width: 300px;
`;

export const InputComponent = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(165, 165, 165, 0.5)',
})`
  height: 40;
  width: 77%;
  margin-top: 7%;
  color: #fff;
  font-size: 16px;
  margin-left: 25px;
  background-color: rgba(165, 165, 165, 0.2);
  border-radius: 30px;
  padding: 10px;
`;

export const BtnEnter = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(255, 20, 147, 0.1);
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  border-radius: 30px;
`;

export const BtnInvisibleBorder = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 30px;
  border-width: 1px;
  border-color: rgba(255, 20, 147, 0.4);
`;

export const TextWhite = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const RedesArea = styled.View`
  justify-content: space-between;
`;

export const UserArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 4%;
  flex-direction: row;
  justify-content: space-around;
`;

export const UsePhoto = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  align-self: center;
`;

export const NameUser = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26;
`;

export const VideArea = styled.View`
  width: 100%;
  height: 225;
  border-bottom-width: 4px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const BtnPasso = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  border-radius: 6px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const BtnPassoText = styled.Text`
  font-size: 18;
  color: #fff;
`;

export const MateriaisArea = styled.View`
  flex-direction: row;
`;

export const LapisContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  margin-top: 15;
  flex-direction: row;
`;

export const BtnFinalizar = styled.TouchableOpacity`
  width: 40%;
  height: auto;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex-direction: row;
  margin-top: 15px;
`;

export const ConcordTerms = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

export const TextBase = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

export const Divisoria = styled.View`
  width: 80%;
  height:1px ;
  background-color: #aaa;
  align-self: center;
`;
