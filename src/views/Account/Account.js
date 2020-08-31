import React from 'react';
//css
import './Account.scss'
//fire
import fire from '../../api/firebase-config'
//components
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar';



const Account = props => {

    const SignOutBtn = () => <button style={{marginRight: '40px'}} onClick={() => fire.auth().signOut()}>Deconnexion</button>

    return (
        <div >
            <Navbar logo='Espace Perso' links={<SignOutBtn />} white='true'/>
            <div className='account'>
                <h1>Welcome My Friend</h1>
                <Sidebar /> 
                
            </div>
        </div>
    )
}

export default Account;


