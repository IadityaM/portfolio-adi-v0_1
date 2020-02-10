import React, { Suspense } from 'react';
// import PropTypes from 'prop-types';
import { a, useSpring, useTransition } from 'react-spring';

function LandingBack(props) {
	const calc_dp = (x, y) => [
		-(y - window.innerHeight / 2) / 20,
		(x - window.innerWidth / 2) / 20,
		1.15,
	];

	// const trans = (x, y, s) =>
	// 	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
	const trans_dp = (x, y, s) =>
		`perspective(50vh) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

	const [aniprops, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 },
	}));

	const [aniprops_dp, set_dp] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 8, tension: 400, friction: 80 },
	}));

	return (
		<a.div className='app_back_animated'>
			{/* <a.h1>I'm an animated Header</a.h1>
			I will have all the animations <br />
			that will show up in the background
			<br />
			of the entire app. */}
		</a.div>
	);
}

// LandingBack.propTypes = {};

export default LandingBack;

// // const [on, toggle] = useState(false);

// // const transition = useTransition(on, null, {
// // 	from: { opacity: 0 },
// // 	enter: { opacity: 1 },
// // 	leave: { opacity: 0 },
// // });

// // const calc = (x, y) => [
// // 	-(y - window.innerHeight / 2) / 20,
// // 	(x - window.innerWidth / 2) / 20,
// // 	1.1,
// // ];

// const calc_dp = (x, y) => [
// 	-(y - window.innerHeight / 2) / 20,
// 	(x - window.innerWidth / 2) / 20,
// 	1.15,
// ];

// // const trans = (x, y, s) =>
// // 	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
// const trans_dp = (x, y, s) =>
// 	`perspective(50vh) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// const [aniprops, set] = useSpring(() => ({
// 	xys: [0, 0, 1],
// 	config: { mass: 5, tension: 350, friction: 40 },
// }));

// const [aniprops_dp, set_dp] = useSpring(() => ({
// 	xys: [0, 0, 1],
// 	config: { mass: 8, tension: 400, friction: 80 },
// }));

// // const [intro_2_ani, set_intro_2_ani] = useSpring(()=> (
// // 	from={
// // 		// Start invisible and offscreen
// // 		opacity: 0, marginTop: -1000,
// // 	},
// // 	to={
// // 		// End fully visible and in the middle of the screen
// // 		opacity: 1, marginTop: 0,
// // 	},
// // ))

// // console.log(transition);
// // const cardSpring = useSpring({
// // 	backgroundColor: `#000fff`,
// // });
// //#region sections
// //#region hero section
// const hero_old = (
// 	<section className='land_hero'>
// 		<a.div
// 			className='hero_animator'
// 			initial={{
// 				opacity: 0,
// 				y: -100,
// 				background: '#123',
// 			}}
// 			animate={{
// 				opacity: 1,
// 				y: 0,
// 				background: '#010203',
// 				transition: {
// 					duration: 2,
// 					when: 'beforeChildren',
// 					staggerChildren: 1,
// 				},
// 			}}
// 			transition={{
// 				ease: 'easeInOut',
// 				duration: 2,
// 			}}>
// 			<img
// 				src='https://media.giphy.com/media/i4jKn7itdV2Tvjzj6Y/giphy.gif'
// 				alt='looping background placeholder gif'
// 				width='100%'
// 				height='100%'
// 				className='giphy-embed'
// 			/>
// 			{/* <motion.div
// 				style={{
// 					width: '120px',
// 					height: '120px',
// 					backgroundColor: '#448AFF',
// 					marginTop: '8vh',
// 				}}
// 				animate={{
// 					scale: [1, 2, 2, 1, 1],
// 					rotate: [0, 0, 270, 270, 0],
// 					borderRadius: ['20%', '20%', '50%', '40%', '20%'],
// 				}}
// 				whileHover={{
// 					scale: 1.1,
// 					backgroundColor: '#304FFE',
// 					// background: 'linear-gradient(to right, #304FFE, #448AFF)',
// 				}}
// 				whileTap={{
// 					scale: 0.9,
// 				}}
// 			/>
// 			<a.div
// 				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
// 				onMouseLeave={() => set({ xys: [0, 0, 1] })}
// 				style={{
// 					width: '160px',
// 					height: '160px',
// 					backgroundColor: '#fff176',
// 					marginTop: '8vh',
// 					borderRadius: '50%',
// 					padding: '1rem',
// 					transform: aniprops.xys.interpolate(trans),
// 				}}>
// 				<img style={{ height: '100%' }} src={genericLogo} alt='test pic' />
// 			</a.div> */}
// 		</a.div>
// 		<motion.h1
// 			className='hero_intro_lhs'
// 			initial={{
// 				opacity: 0,
// 				x: 100,
// 			}}
// 			animate={{
// 				opacity: 1,
// 				x: 0,
// 			}}
// 			transition={{ ease: 'easeOut', duration: 2 }}>
// 			{pro.land_greeting}
// 			<br />I am <span className='hero_name_high'>{pro.g_name}</span>
// 			{/* Hi there! <br />I am Aditya. */}
// 		</motion.h1>
// 		<a.img
// 			src={`https://avatars2.githubusercontent.com/u/13042657?s=460&v=4`}
// 			alt='dp of iadityam'
// 			height='100%'
// 			width='auto'
// 			className='hero_intro_rhs_container'
// 			onMouseMove={({ clientX: x, clientY: y }) =>
// 				set_dp({ xys: calc_dp(x, y) })
// 			}
// 			onMouseLeave={() => set_dp({ xys: [0, 0, 1] })}
// 			style={{ transform: aniprops_dp.xys.interpolate(trans_dp) }}
// 		/>
// 		{/* <a.div
// 			className='hero_intro_rhs_container'
// 			onMouseMove={({ clientX: x, clientY: y }) =>
// 				set_dp({ xys: calc_dp(x, y) })
// 			}
// 			onMouseLeave={() => set_dp({ xys: [0, 0, 1] })}
// 			style={{ transform: aniprops_dp.xys.interpolate(trans_dp) }}>
// 			<img
// 				src={`https://avatars2.githubusercontent.com/u/13042657?s=460&v=4`}
// 				alt='dp of iadityam'
// 				height='100%'
// 				width='auto'
// 				className='hero_img'
// 			/>
// 		</a.div> */}
// 		<a.h2
// 			className='hero_intro_rhs'
// 			// onMouseMove={{ opacity: 1 }}
// 			// onMouseLeave={{ opacity: 0.75 }}
// 		>
// 			{`I'm an entrepreneur and I want to make your life easier - with technology.`}
// 		</a.h2>
// 		{/* <div className='hero_intro_lhs_container'>
// 			<div className='hero_intro_lhs_style'> </div>
// 		</div> */}
// 	</section>
// );
// //#endregion
