import React from 'react';
import { View } from 'react-native';
import { BackgroundExercice } from '../../StylesGerais';
import Header from '../../components/Header/headerBack'
import PlayerAula from '../../components/ExerciceComponents/Player/Playes';
import InfArae from '../../components/ExerciceComponents/InfArea/InfArea';
import BtnPrevNextComponent from '../../components/ExerciceComponents/BtnPrevNextComponent';

function Exercicios() {
  return (
    <BackgroundExercice
    source={require('../../../src/assets/BackgroundDesfoque.png')}>
      <View
        style={{backgroundColor:"rgba(0,0,0,0.4)", flex:1}}>
        <Header/>
        <PlayerAula/>
        <InfArae/>
        <BtnPrevNextComponent/>
      </View>
    </BackgroundExercice>
   );
 }

 export default Exercicios;
