import React from 'react'
import { useFavorite } from '../store/useFavorite'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Card2 from '../components/Card2'
import {Container, Row, Col} from 'react-bootstrap';

const Favorite = () => {
	const {favoriteList} = useFavorite()
	const navigate = useNavigate()
	console.log('favoriteList : ', favoriteList)
  return (
	<div className='favorite-info'>
		<div className="favorite-card">
			<h1>Favorite : {favoriteList.length}</h1>
			<Container>
				<Row>
					{favoriteList.map((item,i)=><Col lg={3} key={i}><Card2 item={item} /></Col>)}
				</Row>
			</Container>
			<div className="favorite-info-button">
					<Button variant="primary" onClick={()=>navigate('/')}>Home</Button>
			</div>
		</div>
	</div>



  )
}

export default Favorite