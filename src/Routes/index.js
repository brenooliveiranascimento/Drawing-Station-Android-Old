import React, { useContext } from 'react';
import AuthRoutes from './Auth.routes';
import { AuthContext } from '../Contexts';
import LoadingIndicator from '../components/LoadingIndicator';
import AppRoutes from './App.routes';
import { Background } from '../StylesGerais';

export default function Routes() {
  const { user, loading } = useContext(AuthContext)
  if(loading) {
    return(
      <Background
        source={require("../assets/BackgroundDesfoque.png")}
        >
        <LoadingIndicator/>
      </Background>
    )
  }
 return (
  user ? <AppRoutes/> : <AuthRoutes/> 
  );
}