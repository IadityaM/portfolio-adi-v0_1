import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';

import './styles/App.css';
import Navbar from './components/navigation/Navbar';
import LandingBack from './pages/LandingBack';

//#region Lazy imports
const Landing = lazy(() => import('./pages/Landing'));
const Page404 = lazy(() => import('./pages/DefaultPage'));

//#endregion

//#region App routes
const displayRoutes = {
	Home: { name: 'Home', path: '/' },
	// Dash: { name: 'Dashboard', path: '/dash/', requiresAuth: true },
	// Jobs: { name: 'Jobs', path: '/jobs' },
	// Apply: { name: 'Apply', path: '/apply-now' },
};
//#endregion

function App() {
	return (
		<div className='app'>
			<Helmet>
				<title>Adi says Hi!</title>
				<meta
					name='description'
					content='Portfolio of Aditya Mishra. A tech-head and entrepreneur'
				/>
				<meta name='theme-color' content='#008f68' />
			</Helmet>
			<Navbar routes={Object.values(displayRoutes)} />
			<main className='app_container'>
				<LandingBack />
				<Suspense
					delayMs='50'
					fallback={<div>... Loading All Kinds of Cool Stuff... </div>}>
					<Router className='pages_container'>
						<Landing path={displayRoutes.Home.path} />
						<Page404 default />
					</Router>
				</Suspense>
			</main>
		</div>
	);
}

export default App;

/* <Dashboard path={displayRoutes.Dash.path} />
<Login path={systemRoutes.Login.path} />
<Counselling path={systemRoutes.Counselling.path} />
<Learn path={systemRoutes.Learn.path} />
<ProfilerStudent path={systemRoutes.ProfilerStudent.path} />
<ProfileStudent path={systemRoutes.ProfileStudent.path} />
<ProfilerCompany path={systemRoutes.ProfilerCompany.path} />
<ProfileCompany path={systemRoutes.ProfileCompany.path} />
<Learn path='/works' />
<Learn path='/learn' />
<Build path={routes.Build.path} />
<Build path='/build' />
<Dashboard path='/me/*' />
<Dashboard path='/user/*' />
<Tdc path='/tdc' />
<Toolkit path='/toolkit/*' width={windWidth} isMobile={isMobile} />
<Feedback path='/feedback/*' />
<Studio path={routes.Studio.path} />
<GenericForm path='collab/:id/:id' /> */
