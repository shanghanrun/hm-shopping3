import React from 'react'
import { useCart } from '../store/useCart'

const Cart = () => {
  const {itemList} = useCart()
  return (
	<div>
    <div>Cart items : {itemList.length}</div>
    <ul>
      {itemList.map((item,i)=><li key={i}>{item.title}: {item.count}개</li>)}
    </ul>
  </div>
  )
}

export default Cart