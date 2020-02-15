import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import ProjTags from '../tags/ProjTags';
import { getWAString } from '../../uires/port';

function ServiceCard({
	intro,
	eg,
	description,
	cta,
	cta_msg,
	title_long,
	projects,
	img_src,
	img_cred,
}) {
	return (
		<div className='serv_selected'>
			<article className='serv_card'>
				<Suspense
					fallback={
						<img
							className='serv_card_back'
							src={img_src + `q=10`}
							alt={img_cred}
							width='100%'
							height='auto'
						/>
					}>
					<img
						className='serv_card_back'
						src={img_src + `&q=80`}
						alt={img_cred}
						width='100%'
						height='auto'
					/>
				</Suspense>
				<div className='serv_card_details'>
					<p className='serv_card_intro'>
						I can <span className='card_label'>{intro}</span> to boost your
						business.
					</p>
					<p className='serv_card_eg'>{eg}</p>
					<p className='serv_card_desc'>{description}</p>
					<button
						className='serv_card_cta'
						onClick={() =>
							window.open(
								getWAString(cta_msg),
								'_blank' // <- This is what makes it open in a new window.
							)
						}>
						{cta}
					</button>
				</div>
			</article>
			<div className='serv_card_exp'>
				<p className='card_exp_label'>
					Relevant Experience > <span className='exp_design'>{title_long}</span>
				</p>
				<ProjTags id_list={projects} />
			</div>
		</div>
	);
}

ServiceCard.propTypes = {
	intro: PropTypes.string.isRequired,
	eg: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
	title_long: PropTypes.string.isRequired,
	projects: PropTypes.array.isRequired,
	img_src: PropTypes.string.isRequired,
	img_cred: PropTypes.string,
};

export default ServiceCard;
