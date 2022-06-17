import React from "react";
import {ScrollView} from 'react-native'
import { BackGround, CardsContainer } from "./HomeStyles";
import {AuthContext} from '../../Contexts/index'
import UserArea from "../../components/UserArea/UserArea";
import SelectDifiulty from "../../components/SelectDifiulty/SelectDificulty";
import CardExercices from "../../components/CardExercices/CardExercices";

class Home extends React.Component {
  static contextType = AuthContext;
  constructor() {
    super()

    this.state = {
      exercices: []
    }
  }

  render() {
    const {exerciceData} = this.context;
    return (
      <BackGround
      source={require('../../assets/BackgroundDesfoque.png')}>
        <UserArea/>
        <SelectDifiulty/>
        <ScrollView>
          <CardsContainer>
              {
              exerciceData.basics.map((exercice) => (
                <CardExercices 
                  cardInf={exercice}
                  key={exercice.name}/>
              ))
              }
          </CardsContainer>
        </ScrollView>
      </BackGround>
    )
  }
}

export default Home
