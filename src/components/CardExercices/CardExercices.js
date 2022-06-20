/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { Card, CardImage, CartText } from './styles';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import firestore from '@react-native-firebase/firestore';

class CardExercices extends Component {
  constructor() {
    super()

    this.state = {
      exercices:{},
      showModal:true
    };

    this.selectExercice = this.selectExercice.bind(this);
  }
  static contextType = AuthContext;

  selectExercice() {
    const {navegador, cardInf} = this.props;
    const {setExerciceSelected} = this.context;

    if(cardInf.finished) {
      setExerciceSelected(cardInf);
      navegador.navigate('Exercicios');
      return;
    }
    alert('Exercicio será adicionado em breve');
  }


 render(){
   const {cardInf, updateModal} = this.props
  //  const {exercices} = this.state
   const {user} = this.context;
  return (
    <View>
      <Card
        verify={cardInf.finished}
        onPress={() => cardInf.finished ? this.selectExercice() : updateModal(true)}
        activeOpacity={0.8}>
          <CartText style={{bottom:25}}> {cardInf.name}</CartText>
          <CartText style={{bottom:5}}>
            {cardInf.finished ? (
              <Icon style={{left:50}} size={16} name={!user[cardInf.name] ? 'circle' : 'check-circle'}/> 
            ) : (
              <Text
                style={{fontSize:14, fontWeight:'400', color:'#aaa'}}>Em Breve</Text>
            )}
          </CartText>
      </Card>
      <CardImage source={{uri:cardInf.url}}/>
    </View>
   );
 }
}

export default CardExercices;
