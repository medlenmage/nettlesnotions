import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage/LandingPage';

export const ApplicationViews = () => <>
        <main style={{
          margin: '5rem 2rem',
        }}>
                <Routes>
                        <Route path="/" element={<LandingPage />}/>
                </Routes>
        </main>
    </>;
