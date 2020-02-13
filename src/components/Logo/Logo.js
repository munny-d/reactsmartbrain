import React from 'react';
import Tilt from 'react-tilt';
import dcg from './dcg.png';
import './Logo.css';
 

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
                <img style={{paddingBottom:'5px'}} alt='logo' src={dcg}/>
            </div>
            </Tilt>
        </div>

    );
}

export default Logo;