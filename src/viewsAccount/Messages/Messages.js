import React, { useState, useEffect, useCallback } from 'react';
//routes
import routes from './routes'
import routesSidebar from '../../layout/routes';
//components
import Header from '../../components/Header/HeaderAccount'
import { useMessages } from '../../api/useMessages'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import {useHistory} from 'react-router-dom';
import fire from '../../api/firebase-config'



const Messages = (props) => {

	const cards = useMessages()

	const [data, setData] = useState([])

    let history = useHistory()

	const handleChange = e => {
		e.preventDefault();
	}

	const setResult = useCallback((result) => {
		let search = cards.map(card => Object.values(card))
		search.forEach((card, index) => {
			let validation = []
			card.forEach((course, index) => Array.isArray(course)
				? card[index] = '' : course)
			if ((card.toString().toLowerCase().replace(/,/g, ' ').indexOf('geographie') >= 0)
				&& (card.toString().toLowerCase().replace(/,/g, ' ').indexOf('cinquieme') >= 0)
				&& (card.toString().toLowerCase().replace(/,/g, ' ').indexOf('qcm') < 0)) { validation.push(1) }
			else { validation.push(0) }

			if (validation.indexOf(0) === -1) { result.push(cards[index]) }
		})
		return result
	}, [cards])

	useEffect(() => {
		let result = []
		setResult(result)
		setData(result)
	}, [cards, setResult])
		console.log(data)


	const SignOutBtn = () => <button style={{ marginRight: '40px' }} onClick={() => fire.auth().signOut()}>Deconnexion</button>

	

	const handleClick = id => {
		
		const message = `Voulez-vous vraiment supprimer ce cours? Tapez "oui" pour le supprimer.`
		const deleted = `Le cours vient d'être supprimé`
		const response = prompt(message)
	
		if(response === 'oui') {
			alert(deleted)
				fire.firestore().collection("messages").doc(id).delete();
		} else {
			alert("Vous n'avez rien supprimé")

	}}



	const getLinks = (routes) => {


		return (
			routes.map((prop, key) =>
				prop.name === 'Messages non lu' ?
					<Link className='active' to={prop.path} key={key} >{prop.name} </Link> :
					<Link to={prop.path} key={key} >{prop.name} </Link>

			)

		)
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
					<Header logoOff  links={getLinks(routes)} handleChange={handleChange} />
					<div>
						<table>
							<thead>
								<tr>
									<th colSpan='2'>
										<h2>Cours Publiés</h2>
									</th>
								</tr>
							</thead>
							<tbody>
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

							</tbody></table>
						<table>
							<thead>
								<tr>
									<th colSpan='2'>
										<h2>Brouillons</h2>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									{
										data.map((item, index) =>
											item.publier === false &&
											<div key={index}>
												<td >
													<Link className='link' to={{ pathname: '/account/board', state: item }}>
														{item.course[0].slice(item.course[0].indexOf('=') + 1)}
													</Link>
												</td>
												<td>
												<button onClick={()=> handleClick(item._id)}>Supprimer</button>												</td>
											</div>

										)
									}
								</tr>

							</tbody></table>
					</div>

				</div>


			</div>



		</div>


	)
};

export default Messages;
