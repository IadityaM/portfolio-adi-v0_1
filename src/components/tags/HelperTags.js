import React from 'react';
import PropTypes from 'prop-types';

function HelperTags(props) {
	const { id_list, s_list } = props;
	// console.log('data list: ', id_list);
	// console.log('source list: ', s_list);
	// const named_list = React.useMemo(
	// 	s_list.filter((s) => id_list.includes(s.id)),
	// 	[]
	// );
	const named_list = s_list.filter((s) => id_list.includes(s.id));

	// console.log(`named list is:`, named_list);
	return (
		<div className='proj_skill_list'>
			{named_list ? (
				named_list.map((val, index) => (
					<span key={index} className='skill_tag'>
						{val.name}
					</span>
				))
			) : (
				<p>no data</p>
			)}
		</div>
	);
}

HelperTags.prototype = {
	id_list: PropTypes.array.isRequired,
	s_list: PropTypes.object.isRequired,
};

export default HelperTags;
