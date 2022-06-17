import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { BtnSignOut, HelloUser, PaitingTime, ProgressContainer, ProgressText, UserContainer } from './stylesUser';
import Icon from 'react-native-vector-icons/Feather'

export default class UserArea extends Component {
  static contextType = AuthContext
 render(){
   const {user, exerciceData, signOut} = this.context
  return (
    <UserContainer>
      <HelloUser>Olá {user.name}</HelloUser>
      <PaitingTime>Hora de pintar!</PaitingTime>
      <BtnSignOut
      onPress={signOut}><PaitingTime>Sair</PaitingTime></BtnSignOut>
      <ProgressContainer>
        <Icon color={'white'} size={18} name='activity'/>
        <ProgressText>Seu progresso atual é {user.all}/{exerciceData.basics.length}</ProgressText>
      </ProgressContainer>
    </UserContainer>
   );
 }
}