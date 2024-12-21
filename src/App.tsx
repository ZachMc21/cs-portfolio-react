import React from 'react';
import Link from './components/TitleBanner/Link';
import LinkIcon from './components/TitleBanner/LinkIcon';
import Footer from './components/Footer';

const App: React.FC = () => {

  	return (
		<div>
			<div id="title-banner">
				<h1>Zach Magloughlin</h1>
				<a href='magloughlin.zach@gmail.com'>magloughlin.zach@gmail.com</a>
			</div>
			
			<Footer />
		</div>
  	);
};

export default App;
