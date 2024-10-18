import Skill from "@/types/skill";

const skills:Array<Skill>= [
	new Skill({id: 5, name: "VueJS", icon:"tabler:brand-vue", color: "#41B883", 
		description: "For me it's Main frontend framework. \
					Using Vue I can easily create different types of web applications. \
					And something else about VueJS.", 
		duration: 3,
	}),
	new Skill({id: 2, name: "TypeScript", icon:"tabler:brand-typescript", color: "#3178C6", 
		description: "Main language for the logic in my frontend projects instead of the JavaScript.", 
		duration: 2,
	}),
	new Skill({id: 3, name: "JavaScript", icon:"tabler:brand-javascript", color: "#F1DD35", 
		description: "My first language for the frontend.", 
		duration: 3,
	}),
	new Skill({id: 1, name: "Golang", icon:"tabler:brand-golang", color: "#00ADD8", 
		description: "Using Golang for the backend with gin framework and microservices.", 
		duration: 2,
	}),
	new Skill({id: 4, name: "C++", icon:"tabler:brand-cpp", color: "#4760b3", 
		description: "During the study in 42 I have been using C++ for the projects.", 
		duration: 1,
	}),
	new Skill({id: 6, name: "Bash", icon:"tabler:terminal", color: "#34b338", 
		description: "For the automation of the processes in the terminal and tests.", 
		duration: 1,
	}),
]

export {skills}