import React from 'react';
import {View} from 'react-native';

class Pilars extends React.Component {
  constructor() {
    super()

    this.state = {
      pilars: [
        {name:'Materiais'},
        {name:'Praticando esboço'},
        {name:'Partindo para pintura'},
      ]
    }
  }
  render() {
    return (
      <View>

      </View>
    );
  }
}

export default Pilars