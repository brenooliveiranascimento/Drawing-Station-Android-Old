import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100% ;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity`
  width: 45%;
  height: 190px;
  background-color: ${({verify}) => verify ? 'rgba(0,0,0,0.2)' : 'rgba(30,30,0,0.3)'};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-top: 10px;
  z-index: 99;
`;


export const BackgroundBlack = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({verify}) => verify ? 'rgba(0,0,0,0.0)' : 'rgba(30,30,0,0.3)'};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  z-index: 99;
  position: absolute;
`;

// export const Card = styled.TouchableOpacity`
//   width: 130;
//   height: 180px;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({verify}) => verify ? 'rgba(0,0,0,0.2)' : 'rgba(30,30,0,0.3)'};
//   /* background-color: rgba(0,0,0,0.3); */
//   align-self: center;
//   margin: 10px;
//   z-index: 99;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   border-bottom-left-radius: 20px;
//   z-index: 99;
// `;

export const CardImage = styled.Image`
  position: absolute;
  width: 85%;
  height: 70%;
  z-index: 0;
  top: 5%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  left: 6%;
`;


export const CartText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  bottom: 15px;
  left: 10px;
  text-align: center;
`;
