import React from 'react'
import ProjectCard from './ProjectCard'
import logoMonoReact from '/src/assets/svg_mono/logoMonoReact.svg'
import logoMonoJavascript from '/src/assets/svg_mono/logoMonoJavascript.svg'
import logoMonoHTML from '/src/assets/svg_mono/logoMonoHTML.svg'
import logoMonoCSS from '/src/assets/svg_mono/logoMonoCSS.svg'
import logoMonoTailwind from '/src/assets/svg_mono/logoMonoTailwind.svg'
import logoMonoFigma from '/src/assets/svg_mono/logoMonoFigma.svg'
import logoMonoGithub from '/src/assets/svg_mono/logoMonoGithub.svg'
import testphoto from '/src/assets/images/testphoto.jpg'
import triviaquiz2 from '/src/assets/images/triviaquiz2.png'
import snakegame3 from '/src/assets/images/snakegame3.png'

function ProjectsCollection({ className }) {

	return (
		<div className={className}>
			<ProjectCard

				title={"Strength Training Tracker"}
				img={testphoto}
				description={"Track your workouts and easily see the progress you make in your weight lifting journey. Designed in Figma, using the app “Iron” for UX inspiration."}
				// toolIcons={[{logoReact}, {logoTailwind}, {logoGithub}]}
				toolIcon1={logoMonoReact}
				title1={"React JS"}
				toolIcon2={logoMonoTailwind}
				title2={"Tailwind CSS"}
				toolIcon3={logoMonoFigma}
				title3={"Figma"}
				tags={["login", "authentication", "database", "api"]} />
			<ProjectCard

				title={"Trivia Game"}
				img={triviaquiz2}
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
				img={snakegame3}
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
		</div>
	)
}

export default ProjectsCollection