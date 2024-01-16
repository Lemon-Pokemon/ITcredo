import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Particles from './components/Light/Particles';
// import Wow from './components/Wow/Wow'


import './index.css';
import 'animate.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Particles />
    <Header />
    <Content />
    <Footer />
    {/* <Wow /> */}


  </React.StrictMode>
);


