import React, { Component } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../Contexts';

export default class Exercicios extends Component {

  static contextType = AuthContext;
  
  componentDidMount() {
    console.log(this.context.exerciceSelected)
  }

 render(){
  return (
    <View/>
   );
 }
}