import React from 'react';
import Social from './social';
import Nav from './nav';

export default class LoginForm extends React.Component {
    render () {
        return (
            <div className='container-fluid border bg-dark'>
                <div className='row' id="top-row">
                    <Nav />
                </div>
                <div className='row container-fluid align-middle' id='login-form'>
                    
                        
                        <div className=' container col-sm-4 '>
                            <div className='container card text-center bg-light'>
                                <h3 id='main-heading'>Login</h3>
                                <form className='text-center'>
                                    <label for="username" className='text-left'>Username</label><br></br>
                                    <input type="text" id="username" name="username" placeholder='Username' className=' w-50 input1'></input><br></br>
                                    <label for="password" className='text-left'>Password</label><br></br>
                                    <input type="password" id="password" name="password" placeholder='Password' className='w-50 input2'></input>
                                </form>
                                
                                <p className='text-right small'>Forgot Password?</p>
                                <button className='btn btn-primary rounded w-50' style={{margin: 'auto'}} >Login</button>
                                <br></br>
                                <div className='row'>
                                    <Social />
                                </div>
                            </div>
                            
                            
                        </div>
                </div>
                <div className='row h-25 align-middle' id="bottom-row">
                    <div className='col-sm-4'>Hello</div>
                </div>
            </div>
        )
    }
}