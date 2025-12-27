import { useState, useEffect } from 'react';
import 'animate.css';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { Heading } from './components/header/heading.component';
import { Landing } from './components/landing-page/landing-page';
import { Footer } from './components/footer/footer-component';
import { About } from './components/about/about-component';
import { Projects } from './components/projects/projects.component';
import { Contact } from './components/contact/contact';
import { Modal } from './components/contact/contact';

import { TestContext } from './TestContext';

import splash_bg from './res_external/img/splash_bg.jpg';

//importing images
import Open_Conference from './res_external/img/1.png';
import Monster from './res_external/img/2.png';
import TODO from './res_external/img/3.png';

export const App = () => {
	const [projects] = useState([
		[
			'Online Video Conferencing',
			Open_Conference,
			'https://github.com/ChandanRabha/VideoConference',
			'https://login-ohhyea.herokuapp.com/'
		],
		[
			'Monsteroo',
			Monster,
			'https://github.com/ChandanRabha/monsteroo_ReactJS',
			'https://chandanrabha.github.io/monsteroo_ReactJS/'
		],
		[
			'Todo React App',
			TODO,
			'https://github.com/ChandanRabha/Todo_React_App',
			'https://chandanrabha.github.io/Todo_React_App/'
		],
		[
			'Breaking Bad React App',
			TODO,
			'https://github.com/ChandanRabha/Todo_React_App',
			'https://chandanrabha.github.io/Todo_React_App/'
		]
	]);

	useEffect(() => {
		function checkBoxes() {
			const boxes = document.querySelectorAll('.box');
			const triggerBottom = (window.innerHeight / 5) * 4;

			boxes.forEach((box) => {
				const boxTop = box.getBoundingClientRect().top;
				if (boxTop < triggerBottom) {
					box.classList.add('show');
				} else {
					box.classList.remove('show');
				}
			});
		}

		window.addEventListener('scroll', checkBoxes);
		checkBoxes(); // shows initial box(es)

		return () => {
			window.removeEventListener('scroll', checkBoxes);
		};
	}, []);

	useEffect(() => {
		const setMeta = (attrName, attrValue, content, attrKey = 'name') => {
			let selector = `${attrKey}="${attrName}"`;
			let el = document.querySelector(`meta[${selector}]`);
			if (!el) {
				el = document.createElement('meta');
				el.setAttribute(attrKey, attrName);
				document.head.appendChild(el);
			}
			el.setAttribute('content', content);
		};

		// Title
		document.title = 'CR Portfolio — Chandan Rabha';

		// Basic meta
		setMeta('description', 'Chandan Rabha — Software developer. Portfolio showcasing projects and contact information.');
		setMeta('robots', 'index, follow');

		// Open Graph (use property attr)
		setMeta('og:title', 'CR Portfolio — Chandan Rabha', 'CR Portfolio — Chandan Rabha', 'property');
		setMeta('og:description', 'Chandan Rabha — Software developer. Portfolio showcasing projects and contact information.', 'Chandan Rabha — Software developer. Portfolio showcasing projects and contact information.', 'property');
		setMeta('og:type', 'website', 'website', 'property');
		setMeta('og:url', window.location.href, window.location.href, 'property');

		// canonical link
		let canonical = document.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement('link');
			canonical.setAttribute('rel', 'canonical');
			document.head.appendChild(canonical);
		}
		canonical.setAttribute('href', window.location.href);

		// optional: og:image
		// setMeta('og:image', 'https://example.com/og-image.jpg', 'https://example.com/og-image.jpg', 'property');

		// cleanup not required for single-page set, but you can store originals and restore on unmount if desired
	}, []);

	return (
		<TestContext.Provider value={[1, 2, 3]}>
			<div
				id="Home"
				className="App"
				style={{
					backgroundImage: `url(` + splash_bg + `)`,
					backgroundAttachment: 'fixed'
				}}
			>
				<Heading />
				<Landing />
				<About />
				<h1 className="titleProject" id="Pin_Project">
					Projects{' '}
				</h1>{' '}
				<Projects data={projects} /> <Contact />
				<Modal />
				<Footer />
			</div>{' '}
		</TestContext.Provider>
	);
};

export default App;
