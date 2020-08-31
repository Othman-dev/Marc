import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.js';
import Title from '../../components/Title/Title.js';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import GoDown from '../../components/GoDown/GoDown'

const About = (props) => {

	return (
		<div className='About'>
			<Navbar logo='LOGO' links={<Link to='/'>Home</Link>} />
			<div className='head'>
				<Title title="About" />
			</div>
			<div className='profilContainer'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg' alt='image' className='profilPic' />
				<h4 className='profilTxt'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Cras fermentum odio eu feugiat pretium nibh ipsum. Nec feugiat nisl pretium fusce id. Leo a diam sollicitudin tempor. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Amet nisl purus in mollis. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. A arcu cursus vitae congue mauris rhoncus aenean vel. At risus viverra adipiscing at in tellus. Vitae justo eget magna fermentum iaculis eu non diam. Dictum varius duis at consectetur lorem donec massa sapien faucibus.
								</h4>
			</div>
			<div className='arrow'>
			<a href='#contact'>
					<GoDown />
				</a>
			</div>
				
			

			<ContactForm />
		</div>
	)
}

export default About;
