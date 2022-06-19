import React, { useContext } from 'react';
import CardExercices from '../../components/CardExercices/CardExercices';
import { AuthContext } from '../../Contexts';
import { CardsContainer } from '../Home/HomeStyles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/headerBack';
import { BackGround } from './CardsAreaSyles';

function CardsArea() {
  const {exerciceData} = useContext(AuthContext);
  const navigation = useNavigation();
    return (
      <BackGround
        source={require('../../assets/BackgroundDesfoque.png')}>
          <Header/>
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
      </BackGround>
    )
  }

export default CardsArea;