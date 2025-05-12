import React from 'react';
import Link from './components/TitleBanner/Link';
import LinkIcon from './components/TitleBanner/LinkIcon';
import ProjectMenuLink from './components/ProjectMenuLink/ProjectMenuLink';
import Footer from './components/Footer/Footer';

import './App.scss';
import './components/TitleBanner/TitleBox.scss';


const App: React.FC = () => {

  	return (
		<div id="app">
			<div id="title-banner">

				<h1>Zach Magloughlin</h1>
				<a href='magloughlin.zach@gmail.com'>magloughlin.zach@gmail.com</a>

				<div id="profile-links">
					<div className="profile-links" id="LinkedIn">
						<LinkIcon path="src/images/linkedin.png" alt="The LinkedIn logo." />
						<Link url="https://www.linkedin.com/in/zach-magloughlin" displayText="LinkedIn" />
					</div>
					<div className="profile-links" id="GitHub">
						<LinkIcon path="././images/github.png" alt="The GitHub logo." />
						<Link url="https://github.com/ZachMc21" displayText="GitHub" />
					</div>
					<div className="profile-links" id="HackerRank">
						<LinkIcon path="./././images/hackerrank.png" alt="The HackerRank logo." />
						<Link url="https://www.hackerrank.com/profile/magloughlin_zach" displayText="HackerRank" />
					</div>
				</div> {/* End profile-links */}

				<div id="blurb">
					<p>Detail-oriented recent graduate with experience across subfields of computer science.</p>
					<p>Passionate about continuous learning and solving problems that affect everyday life.</p>
				</div>

			</div> {/* End title-banner */}

			<div id="skills-list">
				<div className="skill-column" id="swe_skills">
					<ul className="nested-0">
						<li> Java </li>
							<ul className="nested-1">
								<li> JUnit </li>
							</ul>
						<li> C++ </li>
						<li> Python </li> 
							<ul className="nested-1">
								<li> Jupyter notebooks </li>
								<li> Matplotlib </li>
								<li> Pandas </li>
							</ul>
					</ul>
				</div>

				<div className="skill-column" id="web-skills">
					<ul className="nested-0">
						<li> HTML5 </li>
						<li> CSS3 </li>
						<li> JavaScript </li>
						<li> TypeScript, React </li>
						<li> Relational databases </li>       
							<ul className="nested-1">
								<li> SQL </li>
								<li> PostgreSQL </li>
								<li> SQLite </li>
							</ul>
					</ul>
				</div>
				
				<div className="skill-column" id="other_skills">
					<ul className="nested-0">
						<li> Git and GitHub </li>
						<li> Scrum software </li>
							<ul className="nested-1">
								<li> Jira </li>
								<li> Notion </li>
							</ul>
						<li> IDEs </li>
							<ul className="nested-1">
								<li> Visual Studio </li>
								<li> Visual Studio Code </li>
								<li> Eclipse </li>
							</ul>
					</ul>
            	</div>
			</div> {/* End skills-list */}

			<div id="projects-container">
				<div id="projects-links">
					<ProjectMenuLink className="project-menu-link" text="Software Engineering" />
					{/*
					<ProjectMenuLink text="Web Development" />
					<ProjectMenuLink text="UI &amp; UX" />
					<ProjectMenuLink text="Data Analysis &amp; Visualization" />
					<ProjectMenuLink text="Databases" />
					<ProjectMenuLink text="Game Development" />
					 */}
				</div>
				<div id="projects-menu-content">
					{/*Each div has a list of skills, a list of takeaways, and a Gallery section for screenshots*/}
					{/* Gallery package installed, see https://codesweetly.com/react-image-grid-gallery/#:~:text=How%20to%20Add%20Image%20Grid%20Gallery%20to%20React,...%207%20Step%207%3A%20Run%20the%20Application%20 */}
					<div className="projects-menu-content" id="webdev">
						<h1>Web Development</h1>

					</div>
					<div className="projects-menu-content" id="swe">
					 	<h1>Software Engineering</h1>
				
					</div>
					<div className="projects-menu-content" id="ui-ux">
						<h1>UI &amp; UX</h1>

					</div>
					<div className="projects-menu-content" id="data">
						<h1>Data Analysis &amp; Visualization</h1>

					</div>
					<div className="projects-menu-content" id="databases">
						<h1>Databases</h1>

					</div>
					<div className="projects-menu-content" id="gamedev">
						<h1>Game Development</h1>

					</div>
				</div>
			</div> {/* End projects container */}
		</div>
  	);
};

export default App;
