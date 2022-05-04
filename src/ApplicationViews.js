import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage/LandingPage';
// import { LandingPageProvider } from './Components/LandingPage/LandingPageProvider';

export const ApplicationViews = () => <>
        <main style={{
          margin: '5rem 2rem',
        }}>
                <Route path="/landing" render={LandingPage}/>
                {/* <Route exact path="/Landing" render={(props) => <LandingPage {...props}/>} /> */}
        </main>
    </>;
