import React from 'react'
import { useFavorite } from '../store/useFavorite'

const Favorite = () => {
	const {favoriteList} = useFavorite()
	console.log('favoriteList : ', favoriteList)
  return (
	<div>
		<div>Fovorite : {favoriteList.length}</div>
		<ul>
			{favoriteList.map((item,i)=><li key={i}>{item.title}</li>)}
		</ul>
	</div>
  )
}

export default Favorite