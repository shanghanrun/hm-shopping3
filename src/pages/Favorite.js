import React from 'react'
import { useFavorite } from '../store/useFavorite'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Favorite = () => {
	const {favoriteList} = useFavorite()
	const navigate = useNavigate()
	console.log('favoriteList : ', favoriteList)
  return (
	<div className='favorite-info'>
		<div className="favorite-card">
			<h1>Favorite : {favoriteList.length}</h1>
			<ul>
				{favoriteList.map((item,i)=><li key={i}>{item.title}</li>)}
			</ul>
			<div className="favorite-info-button">
					<Button variant="primary" onClick={()=>navigate('/')}>Home</Button>
			</div>
		</div>
	</div>



  )
}

export default Favorite