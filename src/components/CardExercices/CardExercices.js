/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { BackgroundBlack, Card, CardImage, CartText, Container } from './styles';
import { Text} from 'react-native';
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

  selectExercice(dataExer, index) {
    const {navegador} = this.props;
    const {setExerciceSelected, setIndexExer} = this.context;

    if(dataExer.finished) {
      setIndexExer(index)
      setExerciceSelected(dataExer);
      navegador.navigate('Exercicios');
      return;
    }
  }


 render(){
   const {cardInf, updateModal} = this.props
  //  const {exercices} = this.state
   const {user} = this.context;
  return (
    <Container>
      {cardInf.map((exercice, index) => (
        <>
              <Card
              key={exercice.name}
              verify={exercice.finished}
              onPress={() => exercice.finished ? this.selectExercice(exercice, index) : updateModal(true)}
              activeOpacity={0.8}>
                <CartText style={{bottom:25}}> {exercice.name}</CartText>
                <CartText style={{bottom:5}}> {exercice.finished ? (
                    <Icon size={16} name={!user[exercice.name] ? 'circle' : 'check-circle'}/> 
                  ) : (
                    <Text
                      style={{fontSize:14, fontWeight:'400', color:'#aaa'}}>Em Breve</Text>
                  )}
                </CartText>
                <BackgroundBlack verify={exercice.finished}/>
                <CardImage source={{uri:exercice.url}}/>
            </Card> 
        </>
      ))}

    </Container>
   );
 }
}

export default CardExercices;
