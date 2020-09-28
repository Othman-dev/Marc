import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from '../../components/Navbar/Navbar';
import Connect from '../../components/Connect/Connect';
//css
import './Login.scss'



const Login = () => {

    return (
        
            <div className='login'>

                <Navbar white={true} logo='logo' links={<Link to='/'>Home</Link>} whiteLinks/>
                <Connect />
            </div>
       
    )
}

export default Login;