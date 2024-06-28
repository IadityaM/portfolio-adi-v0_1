import React from 'react';
import ReactGA from 'react-ga';
// import PropTypes from 'prop-types';
import { getWAString } from '../../uires/port';

import logo from '../../uires/svgs/iam_favi.svg';

const Navbar = (props) => {
	const iam = <img src={logo} className='logo' alt="Aditya Mishra's logo" />;
	const nav = (
		<nav className='links_container'>
			<button
				className='contact_btn btn_cta'
				onClick={() => {
					ReactGA.event({
						category: "Let's Talk",
						action: 'User pressed the lets talk button on the navbar',
					});
					return window.open(getWAString());
				}}>
				Let's Talk
			</button>
		</nav>
	);
	return (
		<header className='app_header'>
			{iam}
			{/* <p className='app_title'>Aditya Mishra</p> */}
			{nav}
		</header>
	);
};

// Navbar.propTypes = {
// 	routes: PropTypes.arrayOf(PropTypes.object),
// };

export default Navbar;
/* <a
  className="app_link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Hire Me
</a> */
