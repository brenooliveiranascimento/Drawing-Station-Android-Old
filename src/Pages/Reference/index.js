import React, { useContext } from 'react';
import {
  ImageBackground,
  Image,
} from 'react-native';
import { AuthContext } from '../../Contexts';
import Header from '../../components/Header/headerBack';

export default function Referencia() {
  const {exerciceSelected} = useContext(AuthContext);
  return (
    <ImageBackground
      source={require('../../assets/BackgroundDesfoque.png')}
      style={{flex: 1, alignItems: 'center'}}>
      <Header />
      {
        exerciceSelected.reference !== '' && (
        <Image
          style={{width: '80%', height: '80%'}}
          source={{uri:exerciceSelected.reference}}
        />
        )
      }
    </ImageBackground>
  );
}
