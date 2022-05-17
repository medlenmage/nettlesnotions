import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import '../../Styles/index.scss';

export const LandingPage = () => <main className="container--landing">
            <div className="landing" id="nettles-landing">
                <div className="landing-content">
                    <h1 className="landing-header">Nettles and Notions</h1>
                    <p className="introduction">
                        Hello and Welcome to Nettles and Notions. My name is Christian Alsider and, this blog site is here for my general musings and thoughts on
                        naturistic life style as well as a place for my photography of nature.
                    </p>
                    <Link id="blog-entry" to="/nettlescorner">Nettles Corner</Link>
                    <hr></hr>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </main>;
