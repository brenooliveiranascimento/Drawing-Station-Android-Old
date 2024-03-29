/* eslint-disable react/prop-types */
import React, {createContext, useState, useEffect, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnimationContext} from './animation';
export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [logInVerify, setLogInVerify] = useState(true);
  const [loading, setLoading] = useState(true);
  const {callAnimation} = useContext(AnimationContext);
  const [exerciceData, setExercicesData] = useState({});
  const [difiuldade, setDificuldade] = useState('basics');
  const [exerciceSelected, setExerciceSelected] = useState({});
  const [message, setMessage] = useState('');
  const [indexExer, setIndexExer] = useState(0);

  const updateMessage = async () => {
    firestore() 
      .collection('Avisos')
      .doc('Aviso1')
      .get()
      .then((snapshot) => {
        setMessage(snapshot.data().message);
      })
  }

  const updateVersion = async () => {
    await firestore()
    .collection('exercices')
    .doc('dados')
    .get()
    .then((snapshot) => {
      setExercicesData(snapshot.data());
      updateStore(snapshot.data(), 'exercices_data');
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const updateVersionStore = async () => {
    return await firestore()
            .collection('Atualizacao')
            .doc('basic')
            .get()
            .then( async(snapshot) => {
              const numberOfVersion = snapshot.data().versoes.length
              await AsyncStorage.setItem('version_code', JSON.stringify(numberOfVersion));
            });
  }

  const getAtualizacao = async () => {
    return await firestore()
            .collection('Atualizacao')
            .doc('basic')
            .get()
            .then( async (snapshot) => {
              const numberOfVersion = snapshot.data().versoes.length
              const nowVersion = await AsyncStorage.getItem('version_code');
            if(numberOfVersion !== JSON.parse(nowVersion)) {
              updateVersion();
            }
          }).catch((error) => {
            console.log(error.message)
          })
  }

  useEffect(() => {
    getAtualizacao();
    updateMessage();
    const loadNowUser = async () => {
      let usuarioAtual = await AsyncStorage.getItem('now_user');
      if (usuarioAtual) {
        setUser(JSON.parse(usuarioAtual));
      }
      setLoading(false);
    }

    const loadExercices = async () => {
      const nowExercices = await AsyncStorage.getItem('exercices_data');
      if (nowExercices) {
        setExercicesData(JSON.parse(nowExercices));
        return;
      }
      updateVersion();
    };
    loadExercices();
    loadNowUser();
  }, []);

  async function updateStore(data, key) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  const pilares = {
    items:[
      {name:'Praticando pintura', id:'Pintura', details:'Hora de por a mão na massa!!', conclude:true, image:require('../assets/Capas/capaRosa.jpg')},
      {name:'Materiais', id:'Materiais', details:'Materiais recomendados', conclude:false, image:null},
      {name:'Praticando esboço', id:'Esboço', details:'Vamos praticar um pouco de esboço?', conclude:false, image:null},
    ]
  }

  // const updatePilar = async () => await firestore().collection('pilares').doc('inf').set(pilars);
  // updatePilar();

  // const [dataEx, setData] = useState({
  //   basics:[
  //     {
  //       name: 'Degrade',
  //       dificulty:'basics',
  //       finished:true,
  //       description: 'Exercicio introdutorio',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2Fdegrade.jpg?alt=media&token=fadab5e1-d5a9-45fb-8d4c-50d7eec214ed',
  //       video: 'DXqcoe8bSKM',
  //       multiExample:true,
  //       id:'degA',
  //       colors:{
  //         red: [
  //           {cor: 'Preto'},
  //           {cor: 'cinza Escuro'},
  //           {cor: 'Vermelho Escuro'},
  //           {cor: 'vermelho'},
  //           {cor: 'rosa Claro'},
  //           {cor: 'Branco'},
  //         ],       
  //          green:[
  //           {cor: 'Preto'},
  //           {cor: 'cinza Escuro'},
  //           {cor: 'Verde'},
  //           {cor: 'Verde claro'},
  //           {cor: 'Branco'},
  //         ],
  //         blue: [
  //           {cor: 'Preto'},
  //           {cor: 'cinza Escuro'},
  //           {cor: 'Azul turquesa'},
  //           {cor: 'Azul real'},
  //           {cor: 'azul'},
  //           {cor: 'Branco'},
  //         ]
  //       },
  //     },
  //     {
  //       name: 'Bola',
  //       dificulty:'basics',
  //       finished:true,
  //       description: 'Exercicio de profundidade',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaBolinha.png?alt=media&token=c7687d41-3ebf-42f2-bd47-230a199ea2ec',
  //       video: 'SMXCMsgJo6Y',
  //       multiExample:false,
  //       id:'ball',
  //       colors: [
  //         {cor: 'Preto'},
  //         {cor: 'marrom'},
  //         {cor: 'cinza Escuro'},
  //         {cor: 'Vermelho Escuro'},
  //         {cor: 'vermelho'},
  //         {cor: 'rosa Claro'},
  //         {cor: 'Branco'},
  //       ]
  //     },
  //     {
  //       name: 'Pétala',
  //       dificulty:'basics',
  //       finished:true,
  //       description: 'Praticando um pouco mais',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaPetalas.jpg?alt=media&token=24064f35-3bdc-41c1-b93c-a22b10bfbcad',
  //       video: 'yZ7qqDUzMFc',
  //       multiExample:false,
  //       id:'petal',
  //       colors: [
  //         {cor: 'preto'},
  //         {cor: 'Cinza escuro'},
  //         {cor: 'Vermelho escuro'},
  //         {cor: 'Vermelho'},
  //         {cor: 'Carmim'},
  //         {cor: 'Rosa claro'},
  //         {cor: 'Branco'},
  //       ]
  //     },
  //     {
  //       name: 'Rosa',
  //       dificulty:'basics',
  //       finished:true,
  //       description: 'Desenho mais complexo',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaRosa.jpg?alt=media&token=bba4de36-afe5-4e6a-bbd7-9785fa1a3cb2',
  //       video: 'MhDWTg7vdkI',
  //       multiExample:false,
  //       id:'rose',
  //       colors: [
  //         {cor: 'preto'},
  //         {cor: 'Cinza escuro'},
  //         {cor: 'Vermelho escuro'},
  //         {cor: 'Vermelho'},
  //         {cor: 'Rosa claro'},
  //         {cor: 'Verde'},
  //         {cor: 'Verde pinho'},
  //         {cor: 'Verde folha'},
  //         {cor: 'Verde claro'},
  //         {cor: 'Branco'},
  //       ]
  //     },
  //   ],
  //   intermediary:[
  //     {
  //       name: 'Cabelo curto',
  //       dificulty:'intermediary',
  //       finished:false,
  //       descricao: 'cabelo castanho curto',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FCapaCavelo.png?alt=media&token=82f72d1f-d81a-45fe-9bda-eb4b9cc1a265',
  //     },
  //     {
  //       name: 'Rosa Azul',
  //       dificulty:'intermediary',
  //       finished:false,
  //       descricao: 'Rosa Azul com fundo',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosaicon.jpg?alt=media&token=7d2640a3-624a-4c73-96d3-12de0d478e5d',
  //     },
  //   ],
  //   advanced: [
  //     {
  //       name: 'Terry Crews',
  //       dificulty:'advanced',
  //       finished:false,
  //       descricao: 'Em Breve',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FIMG_20220206_140140_972.jpg?alt=media&token=23432fec-dbc8-462f-8120-e3770f26b908',
  //     },
  //     {
  //       name: 'Hulk Buster',
  //       dificulty:'advanced',
  //       finished:false,
  //       descricao: 'Em Breve',
  //       url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FIMG_20220206_150724_464%20(1).jpg?alt=media&token=b0241de3-8964-4c31-aa17-10d7855301cc',
  //     },
  //   ]
  // })

  // const updateExerciceDatra = async () => {
  //   firestore().collection('exercices').doc('dados').set(dataEx)
  // }
  // updateExerciceDatra()
  
  const signUp = (email, password, name) => {
    setLoadingBtn(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async snapshot => {
        let uid = snapshot.user.uid;
        let data = {
          email: email,
          name: name,
          uid,
          licenca: null,
          inter: 0,
          avan: 0,
          Basic: 0,
          Degrade: 0,
          Bola: 0,
          Bola_azul:0,
          Bola_verder:0,
          Bola_amarela:0,
          Maçã: 0,
          Rosa: 0,
          blueRose: 0,
          all: 0,
          Pétala: 0,
          frase: '',
          perfil: null,
          balloom:0,
          terry:0,
          hulkBUster:0,
          shortHair:0,
          longHair:0,
          stephenHawking:0
        };
        await firestore()
          .collection('users')
          .doc(uid)
          .set(data)
          .then(() => {
            updateVersionStore();
            updateStore(data, 'now_user');
            setLogInVerify(true);
            setLoadingBtn(false);
            setTimeout(() => {
              setUser(data);
            }, 300);
          });
      })
      .catch(error => {
        setLogInVerify(false);
        alert('Ops, parece que ocorreu algum erro! :(');
        setLoadingBtn(false);
        console.log(error);
        callAnimation();
      });
  };

  // const resetPassword = async () => {
  //   await auth().sendPasswordResetEmail()
  // }


  const visitUser = async () => {
    let data = {
      email: '',
      name: '',
      uid: Math.floor(Date.now() * Math.random()).toString(36),
      licenca: null,
      inter: 0,
      avan: 0,
      Basic: 0,
      Degrade: 0,
      Bola: 0,
      Bola_azul:0,
      Bola_verder:0,
      Bola_amarela:0,
      Maçã: 0,
      Rosa: 0,
      blueRose: 0,
      all: 0,
      Pétala: 0,
      frase: '',
      perfil: null,
      balloom:0,
      terry:0,
      hulkBUster:0,
      shortHair:0,
      longHair:0,
      stephenHawking:0,
      isVisitant:true
    };
    await firestore().collection('users').doc(data.uid).set(data)
    .then(() => {
      updateVersionStore();
            updateStore(data, 'now_user');
            setLogInVerify(true);
            setLoadingBtn(false);
            setTimeout(() => {
              setUser(data);
            }, 300);
    })
  };

  const signIn = (email, password) => {
    setLoadingBtn(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firestore()
          .collection('users')
          .doc(uid)
          .get()
          .then(snapshot => {
            let data = snapshot.data();
            updateVersionStore();
            updateStore(data, 'now_user');
            setLogInVerify(true);
            setLoadingBtn(false);
            setTimeout(() => {
              setUser(data);
            }, 300);
          });
      })
      .catch(error => {
        setLogInVerify(false);
        alert('Ops, ocorreu algum erro!! :(');
        console.log(error);
        setLoadingBtn(false);
        callAnimation();
      });
  };

  async function signOut() {
    if(user.isVisitant) {
      await firestore().collection('users').doc(user.uid).delete();
      await AsyncStorage.clear().then(() => setUser(null));
      setUser(null);
      return
    }
    await AsyncStorage.clear().then(async () => {
      await auth().signOut();
      setUser(null);
    });
  }

  const updateProgress = async exercicio => {
    const getUserData = await firestore().collection('users').doc(user.uid);
    const data = await getUserData.get().then(snapshot => snapshot.data());
    if (!data[exercicio]) {
      data[exercicio] = 1;
      data.all = data.all + 1;
      getUserData.set(data);
      setUser(data);
      updateStore(data, 'now_user')
    } else {
      data[exercicio] = 0;
      data.all = data.all - 1;
      getUserData.set(data);
      setUser(data);
      updateStore(data, 'now_user')
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loadingBtn,
        verify: user,
        user,
        signUp,
        signIn,
        logInVerify,
        loading,
        signOut,
        updateProgress,
        exerciceData,
        difiuldade,
        setDificuldade,
        setExerciceSelected,
        exerciceSelected,
        message,
        pilares,
        indexExer,
        setIndexExer,
        visitUser
      }}>
      {children}
    </AuthContext.Provider>
  );
}
