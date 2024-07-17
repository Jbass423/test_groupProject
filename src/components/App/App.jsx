import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import MyApp from '../GoogleMaps/Maps/Maps';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Maps from '../GoogleMaps/GoogleMaps';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);



  return (
 

<MyApp/>

    
  );
}

export default App;
