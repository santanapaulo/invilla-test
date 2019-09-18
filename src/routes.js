import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/Signin';
import Dashboard from './pages/Dashboard';

// Dividi as rotas em dois blocos visando uma futura implementação de autenticação
export default createAppContainer(
  createSwitchNavigator({
    NonLogged: createSwitchNavigator({
      SignIn,
    }),
    App: createSwitchNavigator({
      Dashboard,
    }),
  }),
);
