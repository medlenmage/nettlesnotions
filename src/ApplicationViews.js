import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { LandingPageProvider } from './Components/LandingPage/LandingPageProvider';

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <LandingPageProvider>
                <Route exact path="/" render={ props => <LandingPage {...props}/>} />
            </LandingPageProvider>
        </main>
    </>
};