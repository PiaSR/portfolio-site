import React from 'react'
import ProjectCard from './ProjectCard'
import logoMonoReact from '/src/assets/svg_mono/logoMonoReact.svg'
import logoMonoJavascript from '/src/assets/svg_mono/logoMonoJavascript.svg'
import logoMonoHTML from '/src/assets/svg_mono/logoMonoHTML.svg'
import logoMonoCSS from '/src/assets/svg_mono/logoMonoCSS.svg'
import logoMonoTailwind from '/src/assets/svg_mono/logoMonoTailwind.svg'
import logoMonoFigma from '/src/assets/svg_mono/logoMonoFigma.svg'
import logoMonoGithub from '/src/assets/svg_mono/logoMonoGithub.svg'
import strengthfin from '/src/assets/images/strengthfin.png'
import portfoliosite from '/src/assets/images/portfoliosite.png'
import quizfin from '/src/assets/images/quizfin.png'
import snakefin from '/src/assets/images/snakefin.png'

function ProjectsCollection({ className }) {

	return (
		<div className={className}>
			<ProjectCard

				title={"Strength Training Tracker (Coming Soon!)"}
				img={strengthfin}
				description={"Work in progress! I'm currently working on a strength training tracking app, where you can track your workouts and easily see the progress you make in your weight lifting journey."}
		
				toolIcon1={logoMonoReact}
				title1={"React JS"}
				toolIcon2={logoMonoTailwind}
				title2={"Tailwind CSS"}
				toolIcon3={logoMonoFigma}
				title3={"Figma"}
				tags={["login", "authentication", "database", "api", "firebase"]} />
			<ProjectCard

				title={"Trivia Game"}
				img={quizfin}
				description={"A trivia quiz application, built in React and using the Open Trivia API. Interactive interface made with CSS. Project inspired by Scrimba’s Learn React Course."}
				siteLink={"https://piasr.github.io/trivia-quiz/"}
				githubLink={"https://github.com/PiaSR/trivia-quiz"}
				// toolIcons={[{logoReact}, {logoTailwind}, {logoGithub}]}
				toolIcon1={logoMonoReact}
				title1={"React JS"}
				toolIcon2={logoMonoJavascript}
				title2={"Javascript"}
				toolIcon3={logoMonoCSS}
				title3={"CSS3"}
				toolIcon4={logoMonoFigma}
				title4={"Figma"}
				tags={["api calls"]} />
			<ProjectCard

				title={"Snake Game"}
				img={snakefin}
				description={"Classic Snake Game built with vanilla Javascript. With score counter, arrow key navigation, Game Over notification and Restart button. (Desktop only) "}
				siteLink={"https://piasr.github.io/snake-game/"}
				githubLink={"https://github.com/PiaSR/snake-game.git"}
				// toolIcons={[{logoReact}, {logoTailwind}, {logoGithub}]}
				toolIcon1={logoMonoJavascript}
				title1={"Javascript"}
				toolIcon2={logoMonoHTML}
				title2={"HTML5"}
				toolIcon3={logoMonoCSS}
				title3={"CSS3"}
				tags={["vanilla JS", "desktop only", "JS canvas"]} />
		
			<ProjectCard

			title={"Personal Portfolio Site"}
			img={portfoliosite}
			description={"This site! My responsive personal portoflio website, designed in Figma, to showcase projects I've built during my front-end dev learning journey. Built in React, using CSS for styling."}
			// toolIcons={[{logoReact}, {logoTailwind}, {logoGithub}]}
	
			githubLink={"https://github.com/PiaSR/portfolio-site.git"}
			toolIcon1={logoMonoReact}
			title1={"React JS"}
			toolIcon2={logoMonoCSS}
			title2={"Tailwind CSS"}
			toolIcon3={logoMonoFigma}
			title3={"Figma"}
			tags={["responsive", "UX design"]} />
		</div>
	)
}

export default ProjectsCollection