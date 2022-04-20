import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

import '../../styles/Services.css';

function Services({ services }) {
	const [activeId, setactiveId] = useState(1);
	return (
		<section className='land_services'>
			<div className='serv_director'>
				<p className='serv_title'> Let us cut to the chase.</p>
			</div>
			<div className='serv_card_layout'>
				<div className='serv_controller'>
					<div className='control_label_container'>
						<h3 className='controller_label'>Things I can do for you:</h3>
					</div>
					<div className='card_controls'>
						{services &&
							services.map((s) => (
								<button
									key={s.id}
									className={
										s.id === activeId
											? 'card_selector card_selector_active'
											: 'card_selector'
									}
									onClick={() => setactiveId(s.id)}>
									{s.short}
								</button>
							))}
					</div>
				</div>
				{services &&
					services
						.filter((sl) => sl.id === activeId)
						.map((sel) => <ServiceCard key={sel.id} {...sel} />)}
			</div>
		</section>
	);
}

Services.propTypes = {
	services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Services;
