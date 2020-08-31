import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import './Connect.scss';
import fire from '../../api/firebase-config'
import {AuthContext} from '../../context/AuthContext';


const Connect = ({history}) => {

    console.log(history)
   

    const handleSubmit = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await fire
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/account");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const currentUser = useContext(AuthContext);

      if (currentUser) {
        return <Redirect to="/account" />;
      }
    console.log(currentUser)

    return (
        <div className='connect'>
            <div>
                <div>
                    <h2>Espace perso</h2>
                </div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='email' ><h4>Identifiant </h4> </label>
                        <input type='text' id='email' name='email' placeholder='identifiant...'/>
                    </div>
                    <div>
                        <label htmlFor='password' ><h4>Mot de Passe</h4></label>
                        <input type='password' id='password' name='password' placeholder='mot de passe...' />
                    </div>
                    <button type='submit' >Connexion</button>
                </form>
            </div>

        </div>
    )
}


export default withRouter(Connect);

