import React from "react";
import { Text } from 'react-native';
import { BackGround } from "./HomeStyles";
import {AuthContext} from '../../Contexts/index'
import UserArea from "../../components/UserArea/UserArea";
import SelectDifiulty from "../../components/SelectDifiulty/SelectDificulty";

class Home extends React.Component {
  static contextType = AuthContext;
  constructor() {
    super()

    this.state = {
      exercices: []
    }
  }

  componentDidMount() {
    console.log(this.context.user)
  }

  render() {
    const {exerciceData} = this.context;
    return (
      <BackGround
      source={require('../../assets/BackgroundDesfoque.png')}>
        <UserArea/>
        <SelectDifiulty/>
        {
          exerciceData.basics.map((exercice) => (
            <Text key={exercice.name}>{exercice.name}</Text>
          ))
        }
      </BackGround>
    )
  }
}

export default Home
