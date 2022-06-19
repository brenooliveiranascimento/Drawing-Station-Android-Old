/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { Card, Container, Details, NameOfRoute, ProgressArea} from './CarDStyles';

export default class CardRoute extends Component {
  constructor() {
    super();

    this.verifyRoute = this.verifyRoute.bind(this);
  }
  static contextType = AuthContext;

  verifyRoute(pilar) {
    const {navegador, updateModal} = this.props;
    if(pilar.conclude) {
      navegador.navigate('CardsArea')
      return
    }
    updateModal(true)
    return;
  }

 render(){
   const {pilares} = this.context;
  return (
    <Container>
      {
        pilares.items.map((pilar) => (
          <Card
            onPress={() => this.verifyRoute(pilar)}
            activeOpacity={0.8} 
            key={pilar}>
            <NameOfRoute>
              {pilar.name}
            </NameOfRoute>
            <Details>{pilar.details}</Details>
            <ProgressArea>
              {/* <ProgressBar/>
              <ProgressBarColored/>
              <ProgressInNumber>
                <PorcentText>60%</PorcentText>
              </ProgressInNumber> */}
            </ProgressArea>
          </Card>
        ))
      }
    </Container>
   );
 }
}