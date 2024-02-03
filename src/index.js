import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/App.css';
import './css/Mobile.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Body from './components/body';
import Search from './components/search';
import Banner from './components/banner';
import Sticky from './components/sticky';
import Category from './components/catagory';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
    <Search/>
    <Category/>
    <Banner/>
    <Banner/>
    <Banner/>
    <Footer/>
    <Sticky/>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
