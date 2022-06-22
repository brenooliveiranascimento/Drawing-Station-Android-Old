/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'react-native';
import { BtnFinalizar, TextBase } from '../../../StylesGerais';

export default function BtnShowReference({setModal}) {
 return (
   <View
    style={{width:"90%", alignSelf:'center', marginTop:-20, marginBottom:15}}>
      <BtnFinalizar
      style={{width:'auto'}}
      onPress={setModal}>
        <TextBase>Vizualizar referencia</TextBase>
      </BtnFinalizar>
   </View>
  );
}
