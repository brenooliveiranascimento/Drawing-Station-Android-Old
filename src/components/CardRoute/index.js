import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { TextWhite } from '../../StylesGerais';
import { Card, Container, Details, NameOfRoute, PorcentText, ProgressArea, ProgressBar, ProgressBarColored, ProgressInNumber } from './CarDStyles';

export default class CardRoute extends Component {
  static contextType = AuthContext;
  componentDidMount() {
  }
 render(){
   const {pilares} = this.context;
  return (
    <Container>
      {
        pilares.items.map((pilar) => (
          <Card 
            activeOpacity={0.8} 
            key={pilar}>
            <NameOfRoute>
              {pilar.name}
            </NameOfRoute>
            <Details>{pilar.details}</Details>
            <ProgressArea>
              <ProgressBar/>
              <ProgressBarColored/>
              <ProgressInNumber>
                <PorcentText>60%</PorcentText>
              </ProgressInNumber>
            </ProgressArea>
          </Card>
        ))
      }
    </Container>
   );
 }
}