import { months } from "../assets/months"

class JourneyItem {
	title:string
	comment:string
	start:Date
	end:Date|null
	constructor(data:any) {
		this.comment = data["comment"]
		this.title = data["title"]
		this.start = new Date(data["start"])
		this.end = data["end"] ? new Date(data["end"]) : null
	}

	periodStart(){
		const startYear = this.start.getFullYear()
		const startMonth = months[this.start.getMonth()]
		return `${startMonth} ${startYear}`
	}
	
	periodEnd(){
		if(this.end){
			const endYear = this.end.getFullYear()
			const endMonth = months[this.end.getMonth()]
			return `${endMonth} ${endYear}`
		} else {
			return `now`
		}
	}
}

const journeyEvents:Array<JourneyItem> = [
	new JourneyItem({
		title: "Study in 42 Abu Dhabi: Common Core course", 
		comment: `42 Abu Dhabi is a unique and innovative institution, where education takes place without traditional teachers, allowing students to learn autonomously from the ground up. 
			Throughout my time there, I engaged in the creation of impressive projects, such as developing a 3D game and building a mini version of Bash. 
			Studying with the C programming language provided me with invaluable insights into the inner workings of modern technologies.`,
		start: "2023-06-01 00:00:00",
	}),
	new JourneyItem({
		title: "Work as Frontend Developer in HoraGuru", 
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus augue, porttitor eu purus ut, blandit hendrerit metus. Maecenas accumsan diam vitae risus posuere, vel aliquet enim tempor. In sollicitudin enim nec velit porttitor aliquet. Donec laoreet, lacus placerat lacinia convallis, turpis nibh vulputate metus, vitae congue erat lectus in risus. In mi ligula, placerat id lacus vitae, tincidunt sodales augue. Phasellus sit amet mollis ante. Proin eget pretium orci. Phasellus vehicula, eros eget dapibus interdum, justo mauris iaculis purus, vel posuere dui nisi volutpat purus. Donec mattis malesuada ligula id posuere.",
		start: "2022-01-01 00:00:00",
	}),
	new JourneyItem({
		title: "Internship as Backend Developer in MirCod - IOT company", 
		comment: `This was my first internship as a backend developer. 
			As an internship, I had to build a backend application with my teammates led by a mentor from the company. 
			I am really thankful to him because he was very friendly and could answer any question related to new technologies for me. 
			From him, I learned how to use Docker and how to develop powerful backend applications using Django Rest Framework.`,
		start: "2021-01-01 00:00:00",
		end: "2021-04-01 00:00:00"
	}),
	new JourneyItem({
		title: "Study in Kazan Federal University: Computer Science", 
		comment: `Kazan Federal University, the premier institution for programming studies in my homeland, laid a solid foundation for my career as a software developer.
			During my time there, I developed a strong mathematical background, which was essential for my understanding of software development. 
			I delved into various fields such as algorithms, linear algebra, and Boolean mathematics. 
			This knowledge provided me with a comprehensive perspective on how applications function—from the fundamental level of managing electrical signals on the motherboard to the advanced level of utilizing modern libraries and frameworks.`,
		start: "2020-09-01 00:00:00",
		end: "2023-02-01 00:00:00"
	}),
]

export {
	journeyEvents,
	JourneyItem
}