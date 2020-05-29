import React from 'react';
import { Link } from 'gatsby';
import Logo from '../components/marca';

const Layout = (props) => {
	const { title, children } = props;
	const [ toggleNav, setToggleNav ] = React.useState(false);
	return (
		<div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
			<header className="site-head">
				<div className="site-head-container">
					<a className="nav-burger" href={`#`} onClick={() => setToggleNav(!toggleNav)}>
						<div
							className="hamburger hamburger--collapse"
							aria-label="Menu"
							role="button"
							aria-controls="navigation"
						>
							<div className="hamburger-box">
								<div className="hamburger-inner" />
							</div>
						</div>
					</a>
					<nav id="swup" class="site-head-left">
						<ul className="nav" role="menu">
							{/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
							<li className="nav-about" role="menuitem">
								<Link to={`/quemsomos`} style={{ opacity: 0.8 }}>
									Quem Somos
								</Link>
							</li>
							<li className="nav-elements" role="menuitem">
								<Link to={`/servicos`} style={{ opacity: 0.8 }}>
									Serviços
								</Link>
							</li>
							<li className="nav-tags" role="menuitem">
								<Link to={`/faleConosco`}>Fale Conosco</Link>
							</li>
						</ul>
					</nav>
					<div className="site-head-center">
						<Link style={{ color: '#111111' }} className="site-head-logo" to={`/`}>
							{/* {title} */}
							<Logo style={{ height: '80px' }} />
						</Link>
					</div>
					<div className="site-head-right">
						<div className="social-links">
							<a
								href="https://www.facebook.com/topel.energiasrenovaveis"
								title="Facebook"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="tpl-fb"
									style={{ color: '#111111', height: '25px' }}
									viewBox="0 0 512 512"
								>
									<path d="M507.8 255.9C507.8 116.9 395 4.1 256 4.1S4.2 116.9 4.2 255.9c0 125.8 92.1 230 212.6 248.7V328.5h-64.3v-72.6h64.3v-55.5c0-63 37.3-98 94.9-98 27.5 0 56 5.2 56 5.2V169h-31.6c-31.4 0-41.2 19.7-41.2 39.4v47.2h70l-11.2 72.6h-58.9v176.1c120.9-18.4 213-122.7 213-248.4z" />
								</svg>
							</a>
							<a
								href="https://www.instagram.com/topelenergia"
								title="Instagram"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="tpl-inst"
									style={{ color: '#111111', height: '23px' }}
									viewBox="0 0 512 512"
								>
									<path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z" />
									<path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z" />
									<circle cx="390.5" cy="121.5" r="30.2" />
								</svg>
							</a>
							{/* <Link to={`/rss.xml`} title="RSS" target="_blank" rel="noopener noreferrer">
								RSS
							</Link> */}
							<a
								href="https://linkedin.com/company/tplengenharia"
								title="LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="tpl-ln"
									style={{ color: '#111111', height: '23px' }}
									viewBox="0 0 512 512"
								>
									<path d="M433.4 433.4h-74.7V316.5c0-27.9-.5-63.8-38.8-63.8-38.9 0-44.8 30.4-44.8 61.7v118.9h-74.7V193h71.7v32.9h1c14.6-25 41.8-39.9 70.7-38.8 75.7 0 89.6 49.8 89.6 114.5v131.8zM116.2 160.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3m37.3 273.3H78.8V193h74.7v240.4zM470.6 4.1H41.3c-20.3-.2-37 16-37.2 36.3v431.1c.2 20.3 16.9 36.6 37.2 36.4h429.3c20.3.3 37-16 37.3-36.4V40.4c-.3-20.3-17-36.6-37.3-36.3" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</header>
			<main id="site-main" className="site-main">
				<div id="swup" className="transition-fade">
					{children}
				</div>
			</main>

			<footer className="site-foot tpl-foot">
				{/* 
				<p className="site-foot-standard">Topel Energias Renovaveis &nbsp; 071 99160-7192</p>
				<p className="site-foot-mobile">
					Topel Energias Renovaveis<br />071 99160-7192
				</p>
				*/}
				<div className="tpl-co-parent">
				
					<div className="tpl-co-marca-wrap"><a
								href="https://tplengenharia.com.br"
								title="TPL Engenharia"
								target="_blank"
								rel="noopener noreferrer"
							><svg xmlns="http://www.w3.org/2000/svg" className="tpl-co-marca" viewBox="0 0 141.5 82.3"><g id="Marca-BASE"><path class="tpl3" d="M82.7 14.1l-2 8c-.5 1.9-1.6 2.8-3.5 2.8h-6.4c-.6 0-.9-.3-.7-1l3-11.7c.2-.6.6-1 1.2-1h6.4c1.8.1 2.5 1.1 2 2.9m12.6-8.7c-2.1-2.1-5-3.2-8.7-3.2H62.7c-1 0-1.6.5-1.8 1.4L49.4 48.7c-.2 1 .1 1.4 1.1 1.4H62c1 0 1.6-.5 1.8-1.4l3.5-13.6c.2-.6.6-1 1.2-1h10.1c3.7 0 7.2-1.1 10.3-3.2 3.2-2.1 5.1-4.6 5.9-7.6L97.3 13c.8-3 .1-5.5-2-7.6M137.1 40.4h-25.4c-1 0-1.3-.5-1.1-1.4l9-35.5c.2-1-.1-1.4-1.1-1.4h-11.7c-.8 0-1.4.5-1.6 1.4l-9.1 35.7c-.8 3-.1 5.5 2 7.6 2.1 2.1 5 3.2 8.7 3.2h27.7c1 0 1.6-.5 1.8-1.4l1.7-6.7c0-.2.1-.4.1-.5.1-.7-.3-1-1-1M56.5 4.8l.6-2.6H37.5v-.1l-2.8.1-10.1 43.2h2.7l9.5-40.6z"/><path class="tpl3" d="M55.4 9.5l.7-2.6H38.4l-8.8 38.5h2.6l8.5-35.9z"/><path class="tpl1" d="M24.8 2.4H2.6V11h20.2l-8.9 38.9h8.8l11-47.6zM37.3 5.6S36 11.2 34.2 19l-2 1H31.9c-.1 0-.2.2-.2.3v.2l.1.1.1.1 2.4 3.2-3.5 2h-.2c-.1 0-.2.2-.2.3l.1.1v.1l.1.1 2.6 4.1-3.7 1.6H29.2c-.1 0-.2.2-.2.3v.1l.1.1 1.2 2.2c-2.2 9.7-2.8 12.1-3.4 14.9h-.1c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.6-.4-1.2-.9-1.4.6-2.7 1.2-5.1 3.5-15v-.1-.1l-1.2-2.2 3.8-1.7h.2s.1 0 .1-.1c.1-.1.1-.2 0-.3h.1l-.1-.1-2.5-4 3.7-2.2s.1 0 .1-.1h.1c.1-.1.1-.2 0-.3l-.1-.1c0-.1-.1-.1-.2-.1l-2.3-3.2 2-1c.1 0 .1.1.1 0s0-.1.1-.2c1.4-6.2 2.6-11.2 3-12.9h18.3l.2-.7H37.3z"/></g><g id="LIVE_TAG"><path class="tpl2" d="M22.9 56h-9.2L12 62.7h8l-.3 1.1h-8l-2 7.4H19l-.3 1.1H8.1l4.6-17.5h10.6l-.4 1.2zM23.6 72.4h-1.2l3.4-12.9h1.1l-.3 1.9c1.7-1.2 3.6-2.1 5.6-2.1 2.6 0 3.5 1.3 2.8 4.1l-2.4 9h-1.2l2.3-8.8c.5-1.8.2-3.3-2.2-3.3-1.9 0-4 1.3-5.1 2l-2.8 10.1zM45.7 71c-1.3.9-2.8 1.5-4.5 1.5-3 0-4-2.2-3.6-5.2.5-4.5 3.3-8.1 8-8.1 1.7 0 3.3.4 4.3 1l-3.3 12.7c-.7 2.6-3.2 4.4-6.4 4.4-1.6 0-2.7-.2-4.2-.5l.4-.9c1.7.5 3 .5 3.8.5 3.1 0 4.7-1.9 5.1-3.4l.4-2zm2.6-10.1c-.8-.5-1.9-.7-3.1-.7-3.9 0-5.9 3.3-6.4 6.9-.3 2.5.4 4.4 3 4.4 1.7 0 3.3-.9 4-1.4l2.5-9.2zM52.9 67.4c-.2 1.8.1 4.3 3.8 4.3 1.6 0 2.8-.2 4-.5l-.1.8c-1.7.5-2.7.6-4.3.6-4.4 0-5-2.9-4.7-5.5.5-4.1 3.1-7.9 8-7.9 2.9 0 4.1 1.6 3.9 3.2-.1 1.3-.9 4.4-10.6 5zm.1-1c8.6-.5 9.3-3 9.4-3.9.2-1.2-.7-2.5-3-2.5-4.1.1-5.9 3.3-6.4 6.4zM66 72.4h-1.2l3.4-12.9h1.1l-.3 1.9c1.7-1.2 3.6-2.1 5.6-2.1 2.6 0 3.5 1.3 2.8 4.1l-2.4 9h-1.2l2.3-8.8c.5-1.8.2-3.3-2.2-3.3-1.9 0-4 1.3-5.1 2L66 72.4zM80.2 72.4H79l4.6-17.5h1.2l-1.7 6.6h.1c1.7-1.3 3.6-2.2 5.5-2.2 2.6 0 3.5 1.3 2.8 4.1l-2.4 9h-1.2l2.3-8.8c.5-1.8.2-3.3-2.2-3.3-1.9 0-4 1.3-5.1 2l-2.7 10.1zM102.2 71.1c-1.3.9-2.9 1.5-4.5 1.5-3 0-4-2.3-3.6-5.4.5-4.4 3.3-8.1 8-8.1 1.7 0 3.2.4 4.2 1l-3.2 12.1H102l.2-1.1zm-3.8.5c1.7 0 3.3-.9 4.1-1.4l2.4-9.3c-.8-.5-1.9-.7-3.1-.7-3.9 0-6 3.3-6.4 7-.2 2.4.5 4.4 3 4.4zM108.4 72.4h-1.2l3.4-12.9h1.1l-.4 2.2h.1c1.7-1.4 3.7-2.5 5.7-2.5l-.3 1.2c-2.2 0-4.4 1.3-5.6 2l-2.8 10zM120.5 59.5l-3.4 12.9h-1.2l3.4-12.9h1.2zm.3-3.5c.5 0 .7.2.7.6-.1.5-.5.9-1.1.9-.5 0-.7-.2-.7-.6.1-.6.5-.9 1.1-.9zM130.3 71.1c-1.3.9-2.9 1.5-4.5 1.5-3 0-4-2.3-3.6-5.4.5-4.4 3.3-8.1 8-8.1 1.7 0 3.2.4 4.2 1l-3.2 12.1h-1.1l.2-1.1zm-3.8.5c1.7 0 3.3-.9 4.1-1.4l2.4-9.3c-.8-.5-1.9-.7-3.1-.7-3.9 0-6 3.3-6.4 7-.3 2.4.4 4.4 3 4.4z"/></g></svg></a></div>
					<div className="tpl-co-text">
						A TOPEL faz parte do Grupo TPL Engenharia, empresa com mais de 40 anos de experiência no setor
						elétrico. E portanto possui um corpo de técnicos e engenheiros que desenvolve, implanta e opera
						cada projeto de forma personalizada.
					</div>
				</div>
				
				&copy; {new Date().getFullYear()} <Link to={`/`}>Topel Energias Renovaveis</Link>{' '}
				<a href="https://topel.com.br" target="_blank" rel="noopener noreferrer" />
			</footer>
		</div>
	);
};

export default Layout;
