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
				Axios.post('http://localhost:4000/api/messages/', message)
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
						<h1>Contact</h1>
						<form onSubmit={handleSubmit}>
								<input type='text' name='name' placeholder='name' onChange={handleChange} required/>
								<br/>
								<input type='email' name='email' placeholder='email@ddress' onChange={handleChange} required/>
								<br/>
								<br/>
								<input type='text' className='formSubject' name='subject' placeholder='Subject' onChange={handleChange} required/>
								<br/>
								<textarea className='formContent'rows='15' name='content' placeholder='Your message' onChange={handleChange} required/>
								<br/>
								<br/>
								<button type='submit' disabled={message.disabled}>Submit</button>
								{message.sent === true && 'message sent'}
						</form>
				</div>
		)
}
export default ContactForm;
