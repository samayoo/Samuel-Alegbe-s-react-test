import React from 'react'
import './footer.css'
import facebook from '../../images/facebook-square-brands.svg';
import googlePlus from '../../images/google-plus-g-brands.svg';
import linkedIn from '../../images/linkedin-brands.svg';
import twitter from '../../images/twitter-square-brands.svg'


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="about">
                    <h4>About</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt numquam temporibus sequi distinctio atque ipsum,
                    </p>
                </div>

                <div className="interest">
                    <h4>Interest</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Veniam culpa quae beatae sunt rerum consectetur
                    </p>
                </div>
            </div>

            <div className="svgIcons">
                    <img src={facebook} className="facebook" alt="" />
                    <img src={twitter} className="twitter" alt="" />
                    <img src={googlePlus} className='googlePlus' alt="" />
                    <img src={linkedIn} className="linkedIn" alt="" />
                </div>
        </>


    )
}

export default Footer