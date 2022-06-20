/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MessageCardContainer, ProgressText, TextMessage } from './CardMessageStyle';

class CardMessage extends React.Component {
  render() {
    const {navegador} = this.props;
    return (
      <MessageCardContainer>
        <ProgressText>Travou em algum exercicio?</ProgressText>
        <TouchableOpacity
          onPress={() => navegador.navigate('instagramApp')}>
          <TextMessage>Não temas! Me chama no instagram que tentarei de ajudar assim que possível</TextMessage>
        </TouchableOpacity>
      </MessageCardContainer>
    )
  }
}

export default CardMessage;