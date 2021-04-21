import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Home from './page/home';

const Routes: React.FC = () => (
  <NativeRouter>
    <SafeAreaView>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </SafeAreaView>
  </NativeRouter>
);

export default Routes;
