import React from 'react';
// import PropTypes from 'prop-types';
import pro from '../../uires/port';
import LinkExternal from '../LinkExternal';

function ProjTags(props) {
	const { id_list } = props;
	const pro_list = pro.projects;

	return (
		<ul className='proj_tag_list'>
			{id_list &&
				pro_list &&
				pro_list
					.filter((p) => id_list.includes(p.id))
					.map((pr) => {
						let project = (
							<li key={pr.id} className='proj_tag'>
								{pr.title}
							</li>
						);
						if (pr.link) {
							project = (
								<li key={pr.id} className='proj_tag'>
									<LinkExternal to={pr.link} label={pr.title} />
									{/* <a href={pr.link} className=''>
										{pr.title}
									</a> */}
								</li>
							);
						}
						return project;
					})}
		</ul>
	);
}

// ProjTags.propTypes = {
// 	id_list: PropTypes.array.isRequired,
// };

export default ProjTags;
