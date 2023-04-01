import logo from './logo.svg';
import './App.css';
import React from 'react'
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Addresse from './Component/Profile/Address';

const  App = () => {
  return(
    <>
      <ProfilePhoto />
       <FullName/>
       <Addresse />
    </>
  );
}


export default  App;
