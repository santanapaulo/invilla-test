import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 28px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  align-items: center;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  width: 200px;
`;
