import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '15px' }}>               
                <p 
                    className='f3 link dim black pa3 underline pointer'
                    onClick={() => onRouteChange('signout')}
                >Sigout</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '15px' }}>               
                <p className='f3 link dim black pa3 underline pointer'
                    onClick={() => onRouteChange('signin')}
                >Signin</p>
                <p className='f3 link dim black pa3 underline pointer'
                    onClick={() => onRouteChange('register')}
                >Register</p>
            </nav>
        );
    }
}

export default Navigation;