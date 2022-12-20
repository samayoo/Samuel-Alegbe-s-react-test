import React from 'react'
import './home.css';
import myImage from '../../images/pic1.png';
import Footer from '../footer/Footer';

function OurBody() {
    return (
        <>
            <div className='ourBody'>
                <div className="imageCover">
                    <img src={myImage} className="image" alt="the profile Pic" />
                </div>

                <div className='nameTitle'>
                    <h3>Samuel Alegbe</h3>
                    <span className='designation'>Frontend developer</span>
                    <button className='email'>Email</button>
                    <button className='linkedIn'>LinkedIn</button>
                </div>

                <Footer />
            </div>
        </>

    )
}

export default OurBody