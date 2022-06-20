import React, { Component } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../Contexts';
import { BackgroundExercice } from '../../StylesGerais';
import Header from '../../components/Header/headerBack'
import PlayerAula from '../../components/ExerciceComponents/Player/Playes';
import InfArae from '../../components/ExerciceComponents/InfArea/InfArea';

export default class Exercicios extends Component {
  static contextType = AuthContext;
 render(){
  return (
    <BackgroundExercice
    source={require('../../../src/assets/BackgroundDesfoque.png')}>
      <View
        style={{backgroundColor:"rgba(0,0,0,0.4)", flex:1}}>
        <Header/>
        <PlayerAula/>
        <InfArae/>
      </View>
    </BackgroundExercice>
   );
 }
}