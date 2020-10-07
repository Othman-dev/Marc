import React, { useState, useEffect, useCallback } from 'react';
//routes
import routes from './routes'
import routesSidebar from '../../layout/routes';
//components
import Header from '../../components/Header/HeaderAccount'
import { useMessages } from '../../api/useMessages'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom';
import fire from '../../api/firebase-config'



const Messages = (props) => {

	const messages = useMessages()
	console.log(messages)


	let history = useHistory()


	const SignOutBtn = () => <button style={{ marginRight: '40px' }} onClick={() => fire.auth().signOut()}>Deconnexion</button>



	const handleClick = id => {

		const message = `Voulez-vous vraiment supprimer ce cours? Tapez "oui" pour le supprimer.`
		const deleted = `Le cours vient d'être supprimé`
		const response = prompt(message)

		if (response === 'oui') {
			alert(deleted)
<<<<<<< HEAD:client/src/viewsAccount/Messages/Messages.js
			Axios.delete(`https://radiant-shore-19271.herokuapp.com/api/message/${id}`)
			history.goBack()
=======
				fire.firestore().collection("messages").doc(id).delete();
>>>>>>> abcb9fab48e66ea448d07db96a70d8a97adf6797:src/viewsAccount/Messages/Messages.js
		} else {
			alert("Vous n'avez rien supprimé")

		}
	}



	return (

		<div className='account'>


			<div className='left-side'>
				<SignOutBtn />

				<div className='sidebar'>
					<div className='links'>
						{
							routesSidebar.map((prop, key) =>
								prop.name === 'Messages' ?
									<Link className='link ' to={prop.layout + prop.path} key={key}> <h4 className='active-sidebar'>{prop.name} </h4> </Link> :
									<Link className='link' to={prop.layout + prop.path} key={key}> <h4>{prop.name} </h4> </Link>
							)
						}
					</div>


				</div>


			</div>

			<div className='right-side'>
				<div className='right-side-header'>
					<Link to='/' target='_blank'><h1>Les Messages</h1></Link>
				</div>

				<div className='content'>
					{/* <Header logoOff  links={getLinks(routes)} handleChange={handleChange} /> */}
					<div>
						<table>
							<thead>
								<tr>
									<th colSpan='2'>
										<h2>Nouveaux Messages</h2>
									</th>
								</tr>
							</thead>
							<tbody>
<<<<<<< HEAD:client/src/viewsAccount/Messages/Messages.js

								{
									messages.map((msg, i) => <tr key={i}>
										<td><Link to=''>{msg.name} </Link></td>
										<td>{msg.subject}</td>


									</tr>
									)
								}

=======
								<tr>
									{
										data.map((item, index) =>
											item.publier === true &&
											<div key={index}>
												<td >
													<Link className='link' to={{ pathname: '/account/board', state: item }}>
														{item.course[0].slice(item.course[0].indexOf('=') + 1)}
													</Link>
												</td>
												<td>
													<button onClick={()=>handleClick(item.id)} >Supprimer</button>
												</td>
											</div>

										)
									}
								</tr>
>>>>>>> abcb9fab48e66ea448d07db96a70d8a97adf6797:src/viewsAccount/Messages/Messages.js

							</tbody></table>
						<table>
							<thead>
								<tr>
									<th colSpan='2'>
										<h2>Méssages déjà lu</h2>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>

								</tr>

							</tbody></table>
					</div>

				</div>


			</div>



		</div>


	)
};

export default Messages;
