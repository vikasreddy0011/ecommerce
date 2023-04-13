import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu } from './Elements';

const NavBar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink  activeStyle>
			About
		</NavLink>
		<NavLink  activeStyle>
			Events
		</NavLink>
		<NavLink  activeStyle>
			Annual Report
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>

	</Nav>
	</>
);
};

export default NavBar;

