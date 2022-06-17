/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { Card, CardImage, CartText } from './styles';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import firestore from '@react-native-firebase/firestore';

class CardExercices extends Component {
  constructor() {
    super()

    this.state = {
      exercices:{}
    };

    // this.getUserData = this.getUserData.bind(this)
    this.selectExercice = this.selectExercice.bind(this);
  }
  static contextType = AuthContext;

  // função responsável por atualiar os check
  // async getUserData() {
  //   const {user} = this.context;
  //   await firestore()
  //   .collection('users')
  //   .doc(user.uid)
  //   .onSnapshot({
  //     error: (error) => console.error(error),
  //     next: (Snapshot) => {
  //       console.log(Snapshot.data());
  //       this.setState({
  //         exercices: Snapshot.data(),
  //       })
  //     },
  //   });
  // }

  // componentDidMount() {
  //   this.getUserData();
  // }

  selectExercice() {
    const {navegador, cardInf} = this.props;
    const {setExerciceSelected} = this.context;

    setExerciceSelected(cardInf);
    navegador.navigate('Exercicios');
  }


 render(){
   const {cardInf} = this.props
  //  const {exercices} = this.state
   const {user} = this.context;
  return (
    <View>
      <Card
        onPress={this.selectExercice}
        activeOpacity={0.8}>
          <CartText style={{bottom:25}}> {cardInf.name}</CartText>
          <CartText style={{bottom:5}}> <Icon size={16} name={!user[cardInf.name] ? 'circle' : 'check-circle'}/> </CartText>
      </Card>
      <CardImage source={{uri:cardInf.url}}/>
    </View>
   );
 }
}

export default CardExercices;