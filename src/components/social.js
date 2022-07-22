import React from 'react';



export default class Social extends React.Component {
    render() {
        return (
            <div className='container text-center'>
                <h6>Sign In With:</h6>
                <button className='btn btn-primary w-33'>Google</button>
                
                <button className='btn btn-primary w-33'>LinkedIn</button>
                
                <button className='btn btn-primary w-33'>FaceBook</button>
            </div>
        )
    }
}