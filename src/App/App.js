import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from '../Components/LandingPage/LandingPage';
// import { ApplicationViews } from '../ApplicationViews';
import './App.scss';

export const NettlesNotions = () => <Route path="/landing" render={LandingPage}/>;
