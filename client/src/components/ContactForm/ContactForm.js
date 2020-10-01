import React, {useState} from 'react';
import './ContactForm.scss';
import Axios from 'axios';

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
				event.preventDefault()
				Axios.post('https://stormy-shelf-35576.herokuapp.com/api/messages/', message)
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
				}

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
								<button type='submit' disabled={message.disabled}>Envoyer</button>
								{message.sent === true && 'message sent'}
						</form>
				</div>
		)
}
export default ContactForm;
