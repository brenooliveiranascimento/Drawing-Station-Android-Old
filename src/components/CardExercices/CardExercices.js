/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { Card, CardImage, CartText } from './styles';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';

class CardExercices extends Component {
  constructor() {
    super()

    this.state = {
      exercices:{}
    };

    this.getUserData = this.getUserData.bind(this)
  }
  static contextType = AuthContext;

  async getUserData() {
    const {user} = this.context;
    await firestore()
    .collection('users')
    .doc(user.uid)
    .onSnapshot({
      error: (error) => console.error(error),
      next: (Snapshot) => {
        console.log(Snapshot.data());
        this.setState({
          exercices: Snapshot.data(),
        })
      },
    });
  }

  componentDidMount() {
    this.getUserData();
  }

 render(){
   const {cardInf} = this.props
   const {exercices} = this.state
  return (
    <View>
      <Card activeOpacity={0.8}>
        <CartText style={{bottom:25}}> {cardInf.name}</CartText>
        <CartText style={{bottom:5}}> <Icon size={16} name={!exercices[cardInf.name] ? 'circle' : 'check-circle'}/> </CartText>
      </Card>
      <CardImage source={{uri:cardInf.url}}/>
    </View>
   );
 }
}

export default CardExercices;