import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
//components
import Navbar from '../../components/Navbar/Navbar.js';
import Title from '../../components/Title/Title.js';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import GoDown from '../../components/GoDown/GoDown'

const About = (props) => {

	return (
		<div className='About'>
			<div className='head'>
				<div className='head-nav'>
					<Navbar logo='MARC BOURREAU' links={<Link to='/'>Home</Link>} whiteLinks />
				</div>


				<Title title="About" />

				<div className='profilContainer'>
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg' alt='about' className='profilPic' />
					<h2 className='profilTxt'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Cras fermentum odio eu feugiat pretium nibh ipsum. Nec feugiat nisl pretium fusce id.
								</h2>
				</div>

			</div>


			<ContactForm />
		</div>
	)
}

export default About;
