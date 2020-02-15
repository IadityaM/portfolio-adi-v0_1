// import React, { lazy, Suspense, useState } from 'react';
// import PropTypes from 'prop-types';
// import { a, useSpring, useTransition } from 'react-spring';

// import '../styles/oldLand.css';
// import port from '../uires/port';
// import genericLogo from '../uires/logos/node_logo.svg';

// const HelperTags = lazy(() => import('../components/tags/HelperTags'));
// const ProjTags = lazy(() => import('../components/tags/ProjTags'));

// function TSList(props) {
// 	const { d } = props;
// 	const [on, toggle] = useState(false);
// 	return (
// 		<a.article
// 			className='tech_label'
// 			// onMouseMove={{ scale: 1.5 }}
// 		>
// 			{d.icon_src ? (
// 				<img
// 					src={d.icon_src}
// 					width='20%'
// 					height='auto'
// 					alt={`logo of ${d.name}`}
// 					className='tech_logo'
// 				/>
// 			) : (
// 				<img
// 					src={genericLogo}
// 					width='20%'
// 					height='auto'
// 					alt={`generic logo for tech skills`}
// 					className='tech_logo'
// 				/>
// 			)}
// 			<div className={props.className ? props.className : 'tech_name'}>
// 				{d.name}
// 			</div>
// 		</a.article>
// 	);
// }

// function OldRef(props) {
// 	const [pro, setpro] = useState(port);
// 	//#region oldConsts
// 	//#region introduction section
// 	const intro = (
// 		<div className='section_container land_intro '>
// 			<aside className='container_aside'>
// 				<p className='aside_title'>Introduction</p>
// 			</aside>
// 			<article className='container_main'>
// 				<p className='main_intro'>
// 					I'm an
// 					{pro.roles.map((role, index) => (
// 						<span
// 							key={role.id}
// 							className='profile_roles'
// 							style={{
// 								borderColor: `${role.color}`,
// 								// boxShadow: `inset 0 -4px ${role.color}`,
// 							}}>
// 							{role.label}
// 						</span>
// 					))}
// 					<br />
// 					<br />I like to build (or optimze) products and services which
// 					customers can access and enjoy. My creed is{' '}
// 					<span className='b i'>
// 						`to use technology for making life easier and happier.`
// 					</span>{' '}
// 					<br />
// 					And I'm always looking for innovators, philosophers, to befriend.
// 				</p>
// 				<p className='main_dream'>
// 					For the past year I've been following my passion to build a
// 					professional network - which will provide affordable promotion & skill
// 					education to creators and builders, optimized to help students and
// 					self-starters.
// 				</p>
// 				<p className='main_efforts'>
// 					We've been hosting free workshops for college students in Delhi-NCR
// 					and It's a work in progress. And frankly we've been unable to raise
// 					funds yet to support the wonderful team.
// 				</p>
// 				<p className='main_goal'>
// 					Ultimately my goal is to support startups and self-starters with the
// 					skills and experience I have so while I'm unable to launch the
// 					platform, I'm still going to do my best to assist you personally.
// 				</p>
// 				<p className='main_cta'>
// 					I'm available for hire and would love to talk to you about your
// 					startup.
// 				</p>
// 				<p className='main_cta2'>
// 					If you are looking for a consult, just ask me over for a cup of coffee
// 					anywhere in Delhi.
// 				</p>
// 			</article>
// 			<div className='container_spacer'> </div>
// 		</div>
// 	);
// 	//#endregion

// 	//#region skills section
// 	const skills = (
// 		<section className='section_container land_skills'>
// 			<aside className='container_aside'>
// 				<p className='aside_title'>I'm proficient in the following skills:-</p>
// 			</aside>
// 			<div className='container_main skill_list'>
// 				{pro.skills &&
// 					pro.skills.map((s) => (
// 						<article className='skill_card' key={s.id}>
// 							<TSList d={s} className='skill_name' />
// 							<p className='last_used'>
// 								{s.last_used - s.start_year} years | since {s.start_year}
// 							</p>
// 							<div className='item_id'>{s.id}</div>
// 							<HelperTags
// 								id={s.id}
// 								id_list={s.projects}
// 								s_list={pro.projects}
// 							/>
// 						</article>
// 					))}
// 			</div>
// 		</section>
// 	);
// 	//#endregion

// 	//#region tech section
// 	//compute and memoize objects that refer to projects or tech or skills
// 	const techs = (
// 		<section className='section_container land_skills'>
// 			<aside className='container_aside'>
// 				<p className='aside_title'>I've used the following technologies:</p>
// 			</aside>
// 			<div className='container_main skill_list'>
// 				{pro.tech &&
// 					pro.tech.map((t) => (
// 						<article className='tech_card' key={t.id}>
// 							<TSList d={t} />
// 							<p className='last_used'>
// 								{t.last_used - t.start_year} years | since {t.start_year}
// 							</p>
// 							<div className='item_id'>{t.id}</div>

// 							<HelperTags id_list={t.projects} s_list={pro.projects} />
// 						</article>
// 					))}
// 			</div>
// 		</section>
// 	);
// 	//#endregion

// 	//#region Project List as Cards
// 	const projects = (
// 		<section className='section_container land_projects'>
// 			I will show a selection of projects undertaken
// 			<div className='container_main proj_list'>
// 				{pro.projects &&
// 					pro.projects.map((p) => (
// 						<article className='proj_card' key={p.id}>
// 							<div
// 								className=''
// 								style={{ display: `flex`, justifyContent: `space-between` }}>
// 								<h2>{p.title}</h2>
// 								<div className='item_id'>{p.id}</div>
// 							</div>
// 							<span>{p.client}</span>
// 							<p>{p.description && p.description}</p>
// 							{/* <div className='proj_tag_list'>
// 								{p.tags &&
// 									p.tags.map((pt, index) => (
// 										<span key={index} className='proj_tag'>
// 											{pt}
// 										</span>
// 									))}
// 							</div> */}
// 							<ProjTags id_list={p.tags} />
// 							<HelperTags id_list={p.tech_used} s_list={pro.tech} />

// 							<HelperTags id_list={p.skills_used} s_list={pro.skills} />
// 						</article>
// 					))}
// 			</div>
// 		</section>
// 	);
// 	//#endregion
// 	//#endregion

// 	return (
// 		<div>
// 			<Suspense delay={`250`} fallback={<div>Loading more cool stuff</div>}>
// 				{intro}
// 				{skills}
// 				{techs}
// 				{projects}
// 			</Suspense>
// 		</div>
// 	);
// }

// OldRef.propTypes = {};

// export default OldRef;
