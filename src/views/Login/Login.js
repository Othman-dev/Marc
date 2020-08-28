import React from 'react';
//components
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';
//css
import './Login.scss'



const Login = props => {

    return (
        
            <div className='login'>

                <Navbar logo='logo' links={<a href='/'> <h4>Home</h4> </a>} />
                <Connect />
            </div>
       
    )
}

export default Login;