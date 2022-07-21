import React, {useState, useContext, useLayoutEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  Background,
  BtnEnter,
  BtnInvisibleBorder,
  InputComponent,
  TextWhite,
} from '../../StylesGerais';
import Icons from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../Contexts';
import LoadingIndicator from '../../components/LoadingIndicator';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {AnimationContext} from '../../Contexts/animation';
import {useNavigation} from '@react-navigation/native';
// import LottieView from 'lottie-react-native';

export default function Auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirPassword] = useState('');
  const [showPassWord, setShowPassword] = useState(true);

  const changePasswordVisibility = () => setShowPassword(!showPassWord);

  const {loadingBtn, signUp, signIn, visitUser} = useContext(AuthContext);
  const {
    leftPosition,
    rightPosition,
    logoAnimation,
    exitAnimation,
    changeState,
    callAnimation,
    estado,
    enterLogo
  } = useContext(AnimationContext);

  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      setTimeout(() =>{
        callAnimation()
      }, 400)
    })
  )

  function registrar() {
    if (!estado) {
      if (email == '' || password == '') {
        alert('preencha todos os campos!');
        return;
      }
      signIn(email, password);
      exitAnimation();
      dismissKeyboard();
      return;
    } else {
      if (
        email == '' ||
        password == '' ||
        name == '' ||
        password == '' ||
        confirmpassword == ''
      ) {
        alert('preencha todos os campos!');
        return;
      }
      signUp(email, password, name);
      exitAnimation();
      dismissKeyboard();
      return;
    }
  }

  return (
    <View
      style={{backgroundColor:"rgba(0,0,0,0.4)", flex:1}}>
    <Background
    style={{flex: 1, height: '100%', zIndex: 1}}
    source={require('../../assets/novosFUndos/layered-waves-haikei.png')}>
      <Animated.Image
        style={{...styles.logoImage, width: logoAnimation}}
        source={require('../../assets/LogoCruasemFundo.png')}
        />
        <Animated.View style={{...styles.InputLeft, marginLeft: leftPosition}}>
        <Icons
          style={styles.iconInputPosition}
          size={25}
          color={'rgba(165, 165, 165, 0.9)'}
          name={!estado ? 'mail' : 'user'}
        />
        <InputComponent
          onChangeText={t => {
            !estado ? setEmail(t) : setName(t);
          }}
          placeholder={!estado ? 'email' : 'Nome'}
        />
      </Animated.View>

      <Animated.View style={{...styles.inputRight, marginRight: rightPosition}}>
        <Icons
          style={styles.iconInputPosition}
          size={25}
          color={'rgba(165, 165, 165, 0.9)'}
          name={!estado ? 'lock' : 'mail'}
        />
        <InputComponent
          secureTextEntry={!estado ? showPassWord : !estado}
          onChangeText={t => {
            !estado ? setPassword(t) : setEmail(t);
          }}
          placeholder={!estado ? 'Senha' : 'Email'}
        />
        {!estado && (
        <TouchableOpacity
        style={{flex:1 , justifyContent:'center', marginTop:13, alignItems:'center', position:'absolute', right:'20%', top:'35%', zIndex: 9999}}
          onPress={changePasswordVisibility}>
            <Icons color={'#aaa'} size={20} name={showPassWord ? 'eye' : 'eye-off'}/>
        </TouchableOpacity>
        )}
      </Animated.View>
      {estado && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Animated.View
            style={{...styles.InputLeft, marginLeft: leftPosition}}>
            <Icons
              style={styles.iconInputPosition}
              size={25}
              color={'rgba(165, 165, 165, 0.9)'}
              name="lock"
            />
            <InputComponent
              secureTextEntry={showPassWord}
              onChangeText={t => setPassword(t)}
              placeholder="Senha"
            />
            <TouchableOpacity
            style={{flex:1, justifyContent:'center', marginTop:13, alignItems:'center', position:'absolute', right:'20%', top:'35%', zIndex: 9999}}
              onPress={changePasswordVisibility}>
                <Icons color={'#aaa'} size={20} name={showPassWord ? 'eye' : 'eye-off'}/>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{...styles.inputRight, marginRight: rightPosition}}>
            <Icons
              style={styles.iconInputPosition}
              size={25}
              color={'rgba(165, 165, 165, 0.9)'}
              name="lock"
            />
            <InputComponent
              secureTextEntry={showPassWord}
              onChangeText={t => setConfirPassword(t)}
              placeholder="Confirmar senha"
            />

          </Animated.View>
        </View>
      )}

      {estado && (
        <Animated.View
          style={{
            width: '70%',
            marginRight: rightPosition,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Animated.View
            style={{...styles.InputLeft, alignSelf:'flex-end'}}>
          </Animated.View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Termos')}
              style={{flex: 1}}>
              <Text
                style={{
                  color: '#aaa',
                  marginTop: 15,
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginBottom:-20
                }}>
                Ao se registrar, você concorda com nossos Termos
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      

      <Animated.View
        style={{width: '100%', marginRight: -100, marginLeft: leftPosition}}>
        <BtnEnter onPress={registrar}>
          <TextWhite>
            {loadingBtn ? (
              <LoadingIndicator />
            ) : !estado ? (
              'Entrar'
            ) : (
              'registrar'
            )}
          </TextWhite>
        </BtnEnter>
      </Animated.View>

      {
        !estado && (
      <Animated.View
        style={{width: '100%',marginLeft: 160, marginTop:10,marginRight: rightPosition}}>
        <BtnInvisibleBorder onPress={visitUser}>
          <TextWhite>
            Entrar como Visitante
          </TextWhite>
        </BtnInvisibleBorder>
      </Animated.View>
        )
      }

      <Animated.View
        style={{width: '100%', marginLeft: 160, marginRight: rightPosition}}>
        <BtnInvisibleBorder onPress={changeState}>
          <TextWhite>
            {!estado ? 'Criar uma conta' : 'Já possuo uma conta'}
          </TextWhite>
        </BtnInvisibleBorder>
      </Animated.View>

      {!estado && (
        <Animated.View
          style={{
            ...styles.InputLeft,
            marginLeft: leftPosition,
            marginRight: '15%',
            justifyContent: 'space-around',
            marginTop: '10%',
            width: '50%',
            borderTopWidth: 1,
            borderTopColor: 'rgba(165, 165, 165, 0.7)',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('instagramAuth')}>
            <Icons
              style={{color: 'rgba(165, 165, 165, 0.7)', fontSize: 30}}
              name="instagram"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('linkedAuth')}>
            <Icons
              style={{color: 'rgba(165, 165, 165, 0.7)', fontSize: 30}}
              name="linkedin"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('youtubeAuth')}>
            <Icons
              style={{color: 'rgba(165, 165, 165, 0.7)', fontSize: 30}}
              name="youtube"
            />
          </TouchableOpacity>
        </Animated.View>
      )}

      {!estado && (
        <TouchableOpacity
          style={{position: 'absolute', bottom: 20}}>
          <Text style={{color: '#aaa'}}>
            Desenvolvido com carinho por @Breno Nascimento
          </Text>
        </TouchableOpacity>
      )}
    </Background>
  </View>
  );
}

export const styles = StyleSheet.create({
  InputLeft: {
    width: '100%',
    flexDirection: 'row',
    marginLeft: '15%',
    zIndex:1,
    alignItems: 'center',
  },
  inputRight: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    zIndex:1,
    marginLeft: '15%',
  },
  iconInputPosition: {
    position: 'absolute',
    top: 45,
    marginLeft: -5,
    marginTop: -13,
    zIndex:1,
  },
  logoImage: {
    height: 100,
    zIndex:1,
    marginBottom: -20,
  },
  blackBeckgound: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  }
});
