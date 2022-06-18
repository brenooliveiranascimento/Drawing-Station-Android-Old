import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { AuthContext } from '../../../Contexts';
import YoutubePlayer from 'react-native-youtube-iframe';
import { TextBase } from '../../../StylesGerais';

class PlayerAula extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
    this.setLoading = this.setLoading.bind(this);
  }
  static contextType = AuthContext;

  setLoading() {
    this.setState({
      loading:false
    })
  }

  render() {
    const {exerciceSelected} = this.context;
    return (
      <View>
        {
          this.state.loading && (
            <>
              <ActivityIndicator
                style={{position:'absolute', alignSelf:'center', marginTop:100}}
                size={30} 
                color="white"/>
              <TextBase
                style={{position:'absolute', alignSelf:'center', marginTop:140}}>
                O VIdeo está carregando!
              </TextBase>
            </>
          )
        }
        <YoutubePlayer
          height={250}
          videoId={exerciceSelected.video}
          onReady={this.setLoading}
          initialPlayerParams={{
            controls: 1,
            modestbranding: 1,
          }}/>
      </View>
    )
  }
}


export default PlayerAula
