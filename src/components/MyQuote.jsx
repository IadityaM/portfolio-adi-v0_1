import React from 'react';
// import PropTypes from 'prop-types';

function MyQuote(props) {
	return (
		<div className='quote_container'>
			"{props.children}"
			{/* <br />
			<br />- {(source && !author) ? source : author? (`by ${author}` ) :('Anonymous')} */}
		</div>
	);
}

// MyQuote.propTypes = {
// 	quote: PropTypes.string,
// };

export default MyQuote;
