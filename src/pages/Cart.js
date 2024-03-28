import React from 'react'
import { useCart } from '../store/useCart'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {itemList} = useCart()
  const navigate = useNavigate()

  return (
    <div className='cart-info'>
		<div className="cart-card">
			<h1>Cart Items : {itemList.length}</h1>
			<ul>
				{itemList.map((item,i)=><li key={i}>{item.title}: {item.count}개</li>)}
			</ul>
			<div className="cart-info-button">
					<Button variant="primary" onClick={()=>navigate('/')}>Home</Button>
			</div>
		</div>
	</div>
  )
}

export default Cart