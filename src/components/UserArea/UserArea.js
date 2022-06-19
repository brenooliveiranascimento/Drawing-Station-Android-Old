import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { BtnSignOut, ContainerRow, HelloUser, PaitingTime, ProgressContainer, ProgressText, TextMessage, UserContainer } from './stylesUser';
import Icon from 'react-native-vector-icons/Feather'
import { TextBase } from '../../StylesGerais';

export default class UserArea extends Component {
  static contextType = AuthContext
 render(){
   const {user, exerciceData, signOut, message} = this.context
   const calculateTotalProgress = (100 / exerciceData.basics.length) * user.all
  return (
    <UserContainer>
      <HelloUser>Olá {user.name}</HelloUser>
      <PaitingTime>Hora de pintar!</PaitingTime>
      <BtnSignOut
      onPress={signOut}><PaitingTime>Sair</PaitingTime></BtnSignOut>
      <ProgressContainer>
        <ContainerRow>
          <Icon color={'white'} size={18} name='activity'/>
          <ProgressText>Seu progresso atual é de {calculateTotalProgress}%</ProgressText>
        </ContainerRow>
        <TextMessage><TextBase style={{fontSize:16}}>Mensagem do ADM:</TextBase> {message}</TextMessage>
      </ProgressContainer>
      <TextBase style={{alignSelf:'flex-start', margin:10, marginTop:15, marginBottom:-25}}>Selecione a rota</TextBase>
    </UserContainer>
   );
 }
}