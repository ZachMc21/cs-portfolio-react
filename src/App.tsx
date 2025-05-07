import React from 'react';
import Link from './components/TitleBanner/Link';
import LinkIcon from './components/TitleBanner/LinkIcon';
import ProjectMenuLink from './components/ProjectMenuLink';
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
						<LinkIcon path="./components/icons/linkedin.png" alt="" />
						<Link url="https://www.linkedin.com/in/zach-magloughlin" displayText="LinkedIn" />
					</div>
					<div className="profile-links" id="GitHub">
						<LinkIcon path="./components/icons/github.png" alt="" />
						<Link url="https://github.com/ZachMc21" displayText="GitHub" />
					</div>
					<div className="profile-links" id="HackerRank">
						<LinkIcon path="./components/icons/hackerrank.png" alt="" />
						<Link url="https://www.hackerrank.com/profile/magloughlin_zach" displayText="HackerRank" />
					</div>
				</div> {/* End profile-links */}
				<div id="blurb">
					<p>Detail-oriented college senior with experience across subfields of computer science.</p>
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
					<ProjectMenuLink text="Software Engineering" />
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
					<div className="projects-menu-content" id="Software Engineering">
					
				
					</div>
					<div className="projects-menu-content" id="Web Development">

					</div>
					<div className="projects-menu-content" id="UI &amp; UX">

					</div>
					<div className="projects-menu-content" id="Data Analysis &amp; Visualization">

					</div>
					<div className="projects-menu-content" id="Databases">

					</div>
					<div className="projects-menu-content" id="Game Developmentf">

					</div>
				</div>
			</div>

			<Footer />
		</div>
  	);
};

export default App;
