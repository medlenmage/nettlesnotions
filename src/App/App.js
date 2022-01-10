import React from 'react';
import { Route } from 'react-router-dom';
import { ApplicationViews } from '../ApplicationViews';
import './App.scss';

export const NettlesNotions = () => {
  return (
  <>
    <Route path="/" render={ApplicationViews} />
  </>
  );
};
