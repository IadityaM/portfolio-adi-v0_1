import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
	return (
		<header className='app_header'>
			<p className='app_title'>Aditya Mishra</p>
			<nav className='links_container'>
				<button
					className='btn_cta'
					onClick={() => alert('ask me out for coffee first!')}>
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
