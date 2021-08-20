import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div>
				<h1>
					<Link className='nav-head' to='/'>
						Triangles-Playground
					</Link>
				</h1>
				<nav>
					<Link className='nav-link' to='/istriangle'>
						Is Triangle?
					</Link>
					<Link className='nav-link' to='/hypotenuse'>
						Hypotenuse
					</Link>
					<Link className='nav-link' to='/area'>
						Area Of Triangle
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
