import React, {useState} from 'react';
import './ContactForm.scss';
import fire from '../../api/firebase-config.js';

const ContactForm = (props) => {

		const[message, setMessage] = useState({
				name:'',
				email:'',
				subject:'',
				content:'',
				sent:false,
				disabled:false
		})

		function handleChange(event) {
				setMessage({...message, [event.target.name]:event.target.value})
		}

		function handleSubmit(event) {
				event.preventDefault()
<<<<<<< HEAD:client/src/components/ContactForm/ContactForm.js
				Axios.post('https://radiant-shore-19271.herokuapp.com/api/messages/', message)
				.then(res => {
				    if(res.data.success) {
				        setMessage({...message,
						    sent:true,
						    disabled: true
				        })
						alert('message sent')
				    }else{
				        setMessage({...message,
						    sent:false,
						    disabled:false
						})
				}}).catch(err => {
						console.log(err)
				        setMessage({...message,
						    sent:false,
						    disabled:false
						})
				})
=======
				const temp = {
						name:message.name,
						email:message.email,
						subject:message.subject,
						content:message.content
>>>>>>> abcb9fab48e66ea448d07db96a70d8a97adf6797:src/components/ContactForm/ContactForm.js
				}
				fire.firestore().collection('messages').doc(generateKey(message.name)).set(temp)
				setMessage({...message,
						sent:true,
						disabled: true
				})
		}
		
		function generateKey(name) {
				return `${name}_${new Date().getTime()}`;
		}

				console.log(message)

		return (
				<div id='contact' className='contactForm'>
						<h1 >Contact</h1>
						<h3>N'hésite pas à me contacter pour me faire partager un détail que j'aurais oublié dans mes cours.</h3>
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
								<button style={{marginRight: '20px'}} type='submit' disabled={message.disabled}>Envoyer</button>
						{message.sent === true && 'Message envoyé'}
						</form>
				</div>
		)
}
export default ContactForm;
