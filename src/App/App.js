import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from '../Components/LandingPage/LandingPage';
import './App.scss';

export const NettlesNotions = () => {
  <>
    <Route path="/" render={LandingPage} />
  </>;
};
