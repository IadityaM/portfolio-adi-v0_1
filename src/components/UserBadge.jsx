import React, { Suspense } from 'react';
// import PropTypes from 'prop-types';

function UserBadge({
	img_src = 'https://avatars2.githubusercontent.com/u/13042657?s=460&v=4',
	name,
	desig,
}) {
	return (
		<div className='user_badge'>
			<Suspense delay='50ms' fallback={<>Loading the cool stuff</>}>
				<img
					src={img_src}
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

// UserBadge.propTypes = {
// 	img_src: PropTypes.string,
// 	name: PropTypes.string.isRequired,
// 	desig: PropTypes.string.isRequired,
// };

// UserBadge.defaultProps = {
// 	img_src: `https://avatars2.githubusercontent.com/u/13042657?s=460&v=4`,
// };

export default UserBadge;
