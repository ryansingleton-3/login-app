import React from 'react'

export default class Nav extends React.Component {
    render() {
        return (
            <div className='navbar nav bg-primary' id='navbar'>
                <a href='/Users/ryansingleton/Promineo/Week-13/login-app/public/index.html'>Shop</a>
                <a href='/Users/ryansingleton/Promineo/Week-13/login-app/public/index.html'>About</a>
                <a href='/Users/ryansingleton/Promineo/Week-13/login-app/public/index.html'>Contact</a>
                <a href='/Users/ryansingleton/Promineo/Week-13/login-app/public/index.html'>Login</a>
            </div>
        )
    }
}