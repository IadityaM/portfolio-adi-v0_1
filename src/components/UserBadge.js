import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

function UserBadge({ img_src, name, desig }) {
	return (
		<div className='user_badge'>
			<Suspense delay='50ms' fallback={<>Loading the cool stuff</>}>
				<img
					src='https://avatars2.githubusercontent.com/u/13042657?s=460&v=4'
					alt='Aditya Mishra as seen on linkedin and github'
					height='100%'
					width='auto'
					className='badge_img'
				/>
			</Suspense>
			<div className='badge_text'>
				<h2 className='hero_name'>{name}</h2>
				<p className='hero_desig'>{desig}</p>
			</div>
		</div>
	);
}

UserBadge.propTypes = {};

export default UserBadge;
