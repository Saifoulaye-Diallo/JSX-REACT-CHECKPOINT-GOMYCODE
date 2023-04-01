import React from "react";
import profil from './profil.jpg';
import './Profil.css'


const ProfilePhoto = () => {
    return (
        <img src={profil} className='profile'/>
    );
}

export default ProfilePhoto;