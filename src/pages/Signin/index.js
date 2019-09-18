import React, { useRef } from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import AsyncStorage from '@react-native-community/async-storage';

import Background from '../../components/Background';

import { Container, Form, FormInput, SubmitButton, Text } from './styles';

export default function Signin({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {
    /**
     * o ideal aqui seria persistir a informação no redux ou no AsyncStorage
     * mas não me atentei a este detalhe de implementação.
     */
    navigation.navigate('App');
  }

  async function signIn() {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();
      await AsyncStorage.setItem('@invilla_user', JSON.stringify(user));
      handleSubmit();
    } catch (error) {
      // supress error
    }
  }

  return (
    <Background>
      <Container>
        <Text>Invilla Teste</Text>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={passwordRef}
          />
          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>

          <GoogleSigninButton
            style={{ width: 200, height: 48, marginTop: 25 }}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </Form>
      </Container>
    </Background>
  );
}
