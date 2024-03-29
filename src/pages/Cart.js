import React, { useState } from 'react'
import { useCart } from '../store/useCart'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Card3 from '../components/Card3'
import {Container, Row, Col} from 'react-bootstrap';


const Cart = () => {
  const {itemList} = useCart()
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0);

  // 계산된 totalPrice를 업데이트하는 함수
  const calculateTotalPrice = () => {
    let total = 0;
    itemList.forEach(item => {
      total += item.price * item.count;
    });
    setTotalPrice(total);
  };
  // 마우스가 버튼 위에서 벗어났을 때 totalPrice를 초기화하는 함수
  const clearTotalPrice = () => {
    setTotalPrice(0);
  };

  return (
    <div className='cart-info'>
		<div className="cart-card">
			<h1>Cart Items : {itemList.length}</h1>
			<Container>
				<Row>
					{itemList.map((item,i)=><Col lg={3} key={i}><Card3 item={item} /></Col>)}
				</Row>
			</Container>
			
			<div className="cart-info-button" 
				onMouseEnter={calculateTotalPrice}
				onMouseLeave={clearTotalPrice}
				> 
					<Button variant="primary" onClick={()=>navigate('/')}>계산하기</Button>
					{/* totalPrice를 보여줄 부분 */}
          			<span> {totalPrice}</span>
			</div>
		</div>
	</div>
  )
}

export default Cart