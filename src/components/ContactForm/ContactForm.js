import React, {useState} from 'react';
import './ContactForm.scss';
import firebase from '../../api/firebase-config';

const ContactForm = (props) => {

		const[message, setMessage] = useState({
				name:'',
				email:'',
				subject:'',
				content:'',
				sent:null,
				disabled:false
		})

		function handleChange(event) {
				setMessage({...message, [event.target.name]:event.target.value})
		}

		function handleSubmit(event) {
				const temp = {
						name:message.name,
						email:message.email,
						subject:message.subject,
						content:message.content
				}
				firebase.firestore().collection('messages').doc(generateKey(message.name)).set(temp)
				setMessage({...message,
						sent:true,
						disabled: true
				})
				event.preventDefault()
		}

		function generateKey(name) {
				return `${name}_${new Date().getTime()}`;
		}

		return (
				<div id='contact' className='contactForm'>
						<h1>Contact</h1>
						<form onSubmit={handleSubmit}>
								<input type='text' name='name' placeholder='Nom' onChange={handleChange} required/>
								<br/>
								<input type='email' name='email' placeholder='Adresse email' onChange={handleChange} required/>
								<br/>
								<br/>
								<input type='text' className='formSubject' name='subject' placeholder='Sujet' onChange={handleChange} required/>
								<br/>
								<textarea className='formContent'rows='15' name='content' placeholder='Tapez votre message ici...' onChange={handleChange} required/>
								<br/>
								<br/>
								<button type='submit' disabled={message.disabled}>Envoyer</button>
								{message.sent === true && 'message sent'}
						</form>
				</div>
		)
}
export default ContactForm;
