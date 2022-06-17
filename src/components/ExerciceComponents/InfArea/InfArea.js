import React from 'react';
import {View} from 'react-native';
import { BtnFinalizar, TextBase } from '../../../StylesGerais';
import { AuthContext } from '../../../Contexts';
import Icon from 'react-native-vector-icons/Feather';

class InfArae extends React.Component {
  static contextType = AuthContext
  render() {
    return (
      <View>
        <TextBase>InfArea</TextBase>
        <BtnFinalizar>
          <TextBase>Finalizado</TextBase>
          <Icon style={{ marginTop:5, marginLeft:10}} size={17} color={'#fff'} name='circle'/>
        </BtnFinalizar>
      </View>
    );
  }
}

export default InfArae;