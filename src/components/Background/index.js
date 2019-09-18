import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

// import { Container } from './styles';

export default styled(LinearGradient).attrs({
  colors: ['#370459', '#17a19a'],
})`
  flex: 1;
`;
