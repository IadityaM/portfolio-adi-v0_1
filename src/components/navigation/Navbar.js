import React from 'react';
import PropTypes from 'prop-types';
import { getWAString } from '../../uires/port';
import ReactGA from 'react-ga';

const Navbar = (props) => {
	return (
		<header className='app_header'>
			<p className='app_title'>Aditya Mishra</p>
			<nav className='links_container'>
				<button
					className='btn_cta'
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
		</header>
	);
};

Navbar.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
};

export default Navbar;
/* <a
  className="app_link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Hire Me
</a> */
