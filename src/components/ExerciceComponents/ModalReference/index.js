/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../../../Contexts';

export default function ModalReference({setModal}) {
  const {exerciceSelected} = useContext(AuthContext);

 return (
   <View
    style={{width:'90%', height:'90%', alignSelf:'center', alignItems:'center', backgroundColor:'#000', marginTop:'10%'}}>
      <TouchableOpacity
        onPress={setModal}
        style={{position:'absolute', zIndex:99, left:10}}>
        <Text style={{color:"#000", fontSize:30}}>x</Text>
      </TouchableOpacity>
      <Image 
        style={{width:'100%', height:'100%'}}
        source={{uri:exerciceSelected.reference}}/>
   </View>
  );
}