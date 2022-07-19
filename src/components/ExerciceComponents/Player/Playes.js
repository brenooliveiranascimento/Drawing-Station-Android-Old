import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
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
              <LottieView
                style={{width: 120, alignSelf:'center', position:'absolute'}}
                source={require('../../../Lottie/lf30_editor_0ktlr6ix.json')}
                autoPlay
              />
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
        onReady={() => setTimeout(() => this.setLoading, 2000)}
        initialPlayerParams={{
          controls: 1,
          modestbranding: 1,
        }}/>

      </View>
    )
  }
}


export default PlayerAula
