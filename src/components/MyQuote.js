import React from 'react';
import PropTypes from 'prop-types';

function MyQuote({ quote, source, author }) {
	return (
		<div className='quote_container'>
			"{quote}"
			{/* <br />
			<br />- {(source && !author) ? source : author? (`by ${author}` ) :('Anonymous')} */}
		</div>
	);
}

MyQuote.propTypes = {};

export default MyQuote;
