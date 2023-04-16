import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import meta from './meta.json';
import { getProductCategories } from '../API/api';

import { Sidenav, Nav } from 'rsuite';
import { useEffect } from 'react';
import { login } from '../API/api';

const styles = {
  width: 240,
  float: 'left',
  marginRight: 0,
  display: 'inline-flex',
  height: '100vh'
};



const NavBar = ({ onSelect,appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
	const [categories,setCategories] = React.useState();


	useEffect(()=>{
		//Here we can wrap the api calls in utils folder or API folder , as there are not many api calls we are directly using
		fetch("https://fakestoreapi.com/products/categories")
		.then(response => response.json())
			// 4. Setting *dogImage* to the image url that we received from the response above
		.then(data => setCategories(data))
		
	},[])

	const onSelectCategory =(e)=>{
		login()
		console.log(e.target.dataset.eventKey)
		onSelect(e.target.dataset.eventKey);
	}
  return (
    <div style={styles}>
		
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
		  <Nav.Item eventKey="all" onClick={onSelectCategory} >
					All products
			</Nav.Item>
		  {categories?categories.map((item,key)=>{
			return (
				<Nav.Item eventKey={key} onClick={onSelectCategory}  >
					{item}
				</Nav.Item>
			)
		  })
		  :<></>}
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  );
};

export default NavBar;