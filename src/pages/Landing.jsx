import React, { lazy, Suspense, useState } from 'react';
// import PropTypes from 'prop-types';
// import { a, useSpring, useTransition } from 'react-spring';

import '../styles/Landing.css';
import port, { getWAString } from '../uires/port';
import UserBadge from '../components/UserBadge';
import MyQuote from '../components/MyQuote';
// import genericLogo from '../uires/logos/node_logo.svg';
// import OldRef from '../zxtras/OldRef';

import pic_launcher from '../uires/svgs/coding moonshots.svg';
// import { useWindowSize } from '../hooks/commonHooks';
// import pic_worker from '../uires/svgs/undraw_work_together.svg';

const pic_source =
	'https://images.unsplash.com/photo-1501159771943-cc9027db4d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=90';

const Services = lazy(() => import('../components/serv/Services'));

function Hero(props) {
	return (
		<section className='landing_hero'>
			<div className='hero_main'>
				<div className='hero_main_content'>
					<UserBadge
						name='Aditya Mishra'
						desig='Developer + Designer + Entrepreneur'
					/>
					<h1 className='hero_title'>Product Developer</h1>
					<p className='hero_subtitle'>
						with the{' '}
						<span
							role='img'
							className='hero_beating_heart'
							aria-label='symbol of heart emoji'>
							❤
						</span>{' '}
						<span className='active_text'>of a designer</span>.
					</p>
					<MyQuote source='Aditya'>
						To design is to tell a story. In product design it's all about
						telling the story that people will remember - i.e.{' '}
						<span className='quote_emphasis active'>
							meaningful, enjoyable, concise & worth re-telling.
						</span>
					</MyQuote>
				</div>
			</div>
			<Suspense
				fallback={
					<div style={{ minHeight: '80vh' }}>
						Loading images from API. Please wait a sec
					</div>
				}>
				<img
					src={pic_source}
					width='100%'
					height='72vh'
					alt='backdrop'
					className='landing_hero_back'
					// style={{
					// 	height: `calc(${win_size.height}*.75)`
					// }}
				/>
			</Suspense>
		</section>
	);
}

const Landing = (props) => {
	const [pro] = useState(port);
	// const win_size = useWindowSize();
	// const services = (
	// 	<section className='land_services'>
	// 		<h4 className='serv_title'>Let's cut to the chase</h4>
	// 		<div className='serv_card_layout'>
	// 			<div className='card_controls'></div>
	// 			<article className='card'></article>
	// 		</div>
	// 	</section>
	// );

	const about = (
		<section className='land_about'>
			<div className='land_about_back'> </div>
			<div className='land_about_main'>
				<Suspense
					fallback={<div>Loading images from API. Please wait a sec</div>}>
					<img
						src={pic_launcher}
						width='100%'
						height='calc(72vh)'
						alt='backdrop'
						className='land_about_pic'
					/>
				</Suspense>
				<div className='land_about_content'>
					<h3 className='blog_head'>About Me</h3>
					<p className='land_about_paras'>
						I am a{' '}
						<span className='active'>
							product leader, rockstar app developer, team builder, and career
							coach
						</span>{' '}
						with 9+ years of experience, from New Delhi, India.
					</p>
					{/* <i className='hint'>Currently I am accepting freelance projects.</i> */}
					<i className='land_about_paras hint'>
						Accepting Remote CTO / Full Stack Dev Projects
					</i>
					{/* <h3 className='about_title'>About Me</h3> */}
					<p className='land_about_paras'>
						I'm a user experience first developer:
						<b className='active'> using Design Thinking to </b> help you{' '}
						<b className='active'>build products that your users love. </b>
						<br />
						<br />
						Making things that{' '}
						<span className='active'> make your life easier </span>
						or <span className='active'>are delightful & fun</span> to use.
					</p>
					{/* <br /> <br /> */}
					<p className='land_about_paras'>
						I strive to ensure both usefullness and joy are the pillars of
						applications built by me - using my background in product
						engineering, development, design, evangelism and
						Human-Computer-Interface research.
					</p>
					<p className='land_about_paras'>
						I'm a Computer Science Engineer by education (B.Tech. batch of 2017)
						but I have been working with startups as{' '}
						<span className='active'>a developer since 2014</span> and as a UI
						Designer since 2011
					</p>
					<p className='land_about_paras'>
						I firmly believe that we can{' '}
						<span className='active'>make our lives significantly better</span>{' '}
						by using bits of technology at the right places in our daily lives.
					</p>
					<p className='land_about_paras'>
						The future of modern commerce is bound to be set in Computer
						Technology & AI enabled products & sevices.
						<br />
					</p>
					<p className='land_about_paras'>
						<b className=''>
							I am here to invite you to be a part of that future by :-
						</b>{' '}
						<br />
						<li>1. helping you make your business future-ready; & </li>
						<li>
							2. turning your valueable ideas into robust, modern products.
						</li>
					</p>
				</div>
			</div>
		</section>
	);

	const blog = (
		<section className='land_blog'>
			<div className='blog_msg'>
				<h3 className='blog_head'>
					<span className='active'>I am open</span> to fun ideas & fresh
					opinions
				</h3>
				<p className='blog_subtitle'>You can read about some</p>
			</div>
			<div className='blog_item_container'>
				{pro.blog &&
					pro.blog.map((blob) => (
						<article
							className='blog_item'
							key={blob.id}
							onClick={() =>
								window.open(
									blob.link,
									'_blank' // <- This is what makes it open in a new window.
								)
							}>
							<div className='blog_img_container'>
								<img
									src={blob.img_src}
									alt='context provider for blog'
									width='100%'
									height='60%'
									className='blog_img'
								/>
							</div>
							<div className='blog_content'>
								<div className='blog_engagement'>⚝</div>
								<h4 className='blog_title'>{blob.title}</h4>
								<p className='blog_dated'>{blob.timestamp}</p>
							</div>
						</article>
					))}
			</div>
		</section>
	);

	const contact = (
		<section className='land_contact'>
			<div className='contact_copy'>
				<h4 className='contact_title'>
					Wondering <span className='active'> what's next?</span>
				</h4>
				<p className='contact_msg'>
					We can start turning your ideas 💡 into reality.
					<br />
					Let's get in touch & start building your products.
					<br />
					<br />
					<i className=''>Start now, so you can launch ASAP.</i>
					<br />I can't wait to hear 💬 from you!
				</p>
				{/* <button
					className='contact_btn'
					onClick={() => alert('ask me out for coffee first!')}>
					Let's Talk
				</button> */}
				{/* <button
					className='contact_btn'
					onClick={() =>
						window.open(
							'https://www.linkedin.com/in/iadityam/',
							'_blank' // <- This is what makes it open in a new window.
						)
					}>
					Connect on LinkedIn
				</button>
				<button
					className='contact_btn_wa'
					onClick={() =>
						window.open(
							// `https://api.whatsapp.com/send?phone=917678114688&text=${params.msg}`,
							getWAString(),
							'_blank' // <- This is what makes it open in a new window.
						)
					}>
					Chat on Whatsapp
					
				</button> */}
				{/* <span role='img' aria-label='chat emoji'>
						{' '}
						🗨
					</span> */}
				<button
					className='contact_btn'
					onClick={() =>
						window.open(
							// `https://api.whatsapp.com/send?phone=917678114688&text=${params.msg}`,
							getWAString(),
							'_blank' // <- This is what makes it open in a new window.
						)
					}>
					Chat on Whatsapp
					{/* <span role='img' aria-label='chat emoji'>
						{' '}
						🗨
					</span> */}
				</button>
				<button
					className='contact_btn_lin'
					onClick={() =>
						window.open(
							'https://www.linkedin.com/in/iadityam/',
							'_blank' // <- This is what makes it open in a new window.
						)
					}>
					Connect on LinkedIn
				</button>
			</div>
		</section>
	);

	//#region footer
	const footer = (
		<footer className='land_footer'>
			<div className=''>
				Made with{' '}
				<span
					role='img'
					className='hero_beating_heart'
					style={{ color: 'red' }}
					aria-label='symbol of heart emoji'>
					❤
				</span>{' '}
				in India
			</div>
			<div className=''>
				Copyright 2019 Aditya Mishra Creations | Certified member of Sustainable
				Innovation Foundation
			</div>
		</footer>
	);
	//#endregion footer
	//#endregion

	return (
		<div className='landing_container'>
			{/* <Suspense
				fallback={
					<div style={{ minHeight: '80vh' }}>
						Loading images from API. Please wait a sec
					</div>
				}>
				<img
					src={pic_source}
					width='100%'
					height='72vh'
					alt='backdrop'
					className='lh_backdrop_temp'
					// style={{
					// 	height: `calc(${win_size.height}*.75)`
					// }}
				/>
			</Suspense> */}
			<Hero />
			<Suspense
				delay={`50`}
				fallback={
					<div style={{ minHeight: '50vh' }}>
						Slow network detected. Loading page content...
					</div>
				}>
				<Services services={pro.services} />
				{about}
				{blog}
				{contact}
			</Suspense>
			{footer}
		</div>
	);
};

// Landing.propTypes = {

// }

export default Landing;
