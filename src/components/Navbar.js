import React, { useState, useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../store/useAuth'
import { useProducts } from '../store/useProduct'
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'

const NavbarCom = () => {
	const menus=[
		'Women', 'Men', 'Baby','Kids',
		'H&M HOME', 'Sport', 'Sale' 
	]
	const {auth, setAuth} = useAuth()
	const {makeList} =useProducts()
	const [keyword, setKeyword] = useState('')
	const navigate = useNavigate()
	const menuRef = useRef()
	const searchRef =useRef()

	function handleLoginClick(){
		if(auth===false){
			navigate('/login')
		} else{
			//로그아웃로직
			navigate('/')
			setAuth(false)
		}
	}
	function search(event){
		if(event.key ==='Enter'){
			setKeyword(event.target.value);
			console.log('keyword : ',keyword )
			event.target.value ="";//input 비운다.
			//브라우저 url을 바꿔준다.
			navigate(`/?q=${keyword}`) //db.json구조에 따라서
			// '/'로 라우팅한 이유는 여러건이 나올 수 있으므로 ProductAll로 라우팅함
		} else{
			return;
		}
	}
	function showUser(){
		if (auth===true){
			navigate('/user')
		}
		else{
			alert('로그인이 되지 않았습니다.')
			navigate('/login')
		}
	}
	async function getProducts(){
		let url;
		if(keyword){
		  // let url = `http://localhost:5000/products?q=${keyword}`
		  url = `https://my-json-server.typicode.com/shanghanrun/hm-shopping2/products?q=${keyword}`
		} else{
		  url ='https://my-json-server.typicode.com/shanghanrun/hm-shopping2/products'
		}
		let response = await fetch(url);
		let data = await response.json()
		console.log('products : ', data)
		makeList(data)
	}
	function showMenu(e){
		e.stopPropagation();
    	menuRef.current.classList.toggle('active2');
        searchRef.current.classList.toggle('active2');
	}
  
	useEffect(()=>{
		getProducts()
	},[keyword])



  return (
	<div>
		<div className='user-login'>
			<div className='user' onClick={showUser}>
				<FontAwesomeIcon icon={faUser} />
			</div>
			<div className="" onClick={()=>navigate('/favorite')}>
				<FontAwesomeIcon id='favorite' icon={faHeart} />
			</div>
			<div className='hidden shopping-bag' onClick={()=>navigate('/cart')}>
				<FontAwesomeIcon icon={faShoppingBag} />
			</div>
			<div className="login-btn" onClick={handleLoginClick} >
				<div id="login-btn">{auth ===true ? "로그아웃": "로그인"}</div>
			</div>
		</div>
		<div className='logo' onClick={()=>navigate('/')}>
			<img width="150px" src='https://tse4.mm.bing.net/th?id=OIP._RBfiehkYJpMAx03aSy0AQHaE4&pid=Api&P=0&h=220' alt='hmlogo' />
		</div>
		<div className='menu-line' >
			<ul className='menus' ref={menuRef} >
				{menus.map((menu,i)=><li className='item' key={i}>{menu}</li>)}
			</ul>
			<div className="search" ref={searchRef}>
				<FontAwesomeIcon icon={faSearch} />
				<input id='input' type="text" onKeyPress={(event)=>search(event)} placeholder="제품 검색" />
			</div>
			<div className="toggleBtn" onClick={showMenu}>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</div>
	</div>
  )
}

export default NavbarCom