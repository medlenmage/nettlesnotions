import React from 'react';
import { Route } from 'react-router-dom';
import { ApplicationViews } from '../ApplicationViews';
import './App.scss';

export const NettlesNotions = () => {
  <>
    <Route path="/" render={ApplicationViews} />
  </>;
};
