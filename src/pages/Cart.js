import React, { useState } from 'react'
import { useCart } from '../store/useCart'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Card3 from '../components/Card3'
import {Container, Row, Col} from 'react-bootstrap';


const Cart = () => {
  const {itemList} = useCart()
  const navigate = useNavigate()
//   const [totalPrice, setTotalPrice] = useState(0);
  console.log('itemList :', itemList)

  // 계산된 totalPrice를 업데이트하는 함수
//   const calculateTotalPrice = () => {
// 	console.log('호버링')
//     let total = 0;
//     itemList.forEach(item => {
//       total += item.price * item.count;
//     });
//     setTotalPrice(total);
//   };
  // 마우스가 버튼 위에서 벗어났을 때 totalPrice를 초기화하는 함수
//   const clearTotalPrice = () => {
//     setTotalPrice(0);
//   };

  const payment=()=>{
	 let total = 0;
    itemList.forEach(item => {
      total += item.price * item.count;
    });
	alert(`지불할 총 금액: ${total}원 입니다.`)
	navigate('/')
  }

  return (
    <div className='cart-info'>
		<div className="cart-card">
			<h1>Cart Items : {itemList.length}</h1>
			<Container>
				<Row>
					{itemList.map((item,i)=><Col lg={3} key={i}><Card3 item={item} /></Col>)}
				</Row>
			</Container>
			
			<div className="cart-info-button" > 
					<Button variant="primary" 
					// onMouseEnter={calculateTotalPrice}
					// onMouseLeave={clearTotalPrice}
					
					onClick={payment}>계산하기</Button>
			</div>
		</div>
	</div>
  )
}

export default Cart