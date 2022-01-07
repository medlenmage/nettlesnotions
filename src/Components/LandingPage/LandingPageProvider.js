import React from 'react';

export const LandingContext = React.createContext()

export const LandingPageProvider = props => {
    return (
        <LandingContext.Provider value={{}}>
            {props.children}
        </LandingContext.Provider>
    )
}