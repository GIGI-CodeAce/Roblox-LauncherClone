import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Friends from './Items/Friends';
import RecomendedForYou from './Items/Recomended.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <Friends/>
        <RecomendedForYou/>
    </>
);
