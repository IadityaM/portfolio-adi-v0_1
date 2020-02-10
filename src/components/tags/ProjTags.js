import React from 'react';
import PropTypes from 'prop-types';
import pro from '../../uires/port';

function ProjTags(props) {
	const { id_list } = props;
	const pro_list = pro.projects;

	return (
		<ul className='proj_tag_list'>
			{id_list &&
				pro_list &&
				pro_list
					.filter((p) => id_list.includes(p.id))
					.map((pr) => (
						<li key={pr.id} className='proj_tag'>
							{pr.title}
						</li>
					))}
		</ul>
	);
}

ProjTags.propTypes = {
	id_list: PropTypes.array.isRequired,
};

export default ProjTags;
