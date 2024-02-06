import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../Components/footer";
import Header from "../Components/header";
import Home from "../Components/home";

import '@fortawesome/fontawesome-free/css/all.css';

const HomePage = ()=>{
    return (
        <>
        {<Header/>}
        {<Home/>}
        {<Footer/>}
        </>
    );
}
export default HomePage;