import React, { Component } from 'react';
import { View } from 'react-native';
import { AuthContext } from '../../Contexts';

class CardExercices extends Component {
  static contextType = AuthContext;
 render(){
  return (
    <View/>
   );
 }
}

export default CardExercices;