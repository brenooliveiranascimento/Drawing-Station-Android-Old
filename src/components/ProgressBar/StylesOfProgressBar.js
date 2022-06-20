import styled from 'styled-components/native';

export const PrograssContainer = styled.View`
  width: 90%;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  align-self: center;
`;

export const TextIndicator = styled.Text`
  color: white;
  font-size: 16px;
  font-weight:500 ;
  align-self: flex-start;
  position: absolute;
  z-index: 99;
  font-weight: bold;
  left: 10px;
`;

export const BackgroundBar = styled.View`
  width: 100%;
  height: 15px;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  border-radius: 10px;
  align-self: flex-start;
`;

export const IndicatorBar = styled.View`
  width: ${({progress}) => `${progress}%`};
  height: 17px;
  background-color: rgba(200,0,120,0.4);
  position: absolute;
  border-radius: 10px;
  align-self: flex-start;
`;
