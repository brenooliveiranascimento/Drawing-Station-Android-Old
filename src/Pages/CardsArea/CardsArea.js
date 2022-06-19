import React, { useContext } from 'react';
import CardExercices from '../../components/CardExercices/CardExercices';
import { AuthContext } from '../../Contexts';
import { Background } from '../../StylesGerais';
import { CardsContainer } from '../Home/HomeStyles';
import { useNavigation } from '@react-navigation/native';

function CardsArea() {
  const {exerciceData} = useContext(AuthContext);
  const navigation = useNavigation();
    return (
      <Background
        source={require('../../assets/BackgroundDesfoque.png')}>
          <CardsContainer>
           {
              exerciceData.basics.map((exercice) => (
                <CardExercices
                  navegador={navigation}
                  cardInf={exercice}
                  key={exercice.name}/>
              ))
              }
          </CardsContainer>
      </Background>
    )
  }

export default CardsArea;