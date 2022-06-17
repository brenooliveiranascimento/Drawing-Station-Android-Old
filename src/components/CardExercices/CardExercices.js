/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { Card, CardImage, CartText } from './styles';
import {View} from 'react-native';

class CardExercices extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    console.log(this.props.cardInf.name);
  }

  static contextType = AuthContext;
 render(){
   const {cardInf} = this.props
  return (
    <View>
      <Card>
        <CartText>{cardInf.name}</CartText>
      </Card>
      <CardImage source={{uri:cardInf.url}}/>
    </View>
   );
 }
}

export default CardExercices;