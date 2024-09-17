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
		title: "Study in 42 Abu Dhabi: Common Core course with C and C++", 
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus augue, porttitor eu purus ut, blandit hendrerit metus. Maecenas accumsan diam vitae risus posuere, vel aliquet enim tempor. In sollicitudin enim nec velit porttitor aliquet. Donec laoreet, lacus placerat lacinia convallis, turpis nibh vulputate metus, vitae congue erat lectus in risus. In mi ligula, placerat id lacus vitae, tincidunt sodales augue. Phasellus sit amet mollis ante. Proin eget pretium orci. Phasellus vehicula, eros eget dapibus interdum, justo mauris iaculis purus, vel posuere dui nisi volutpat purus. Donec mattis malesuada ligula id posuere.",
		start: "2023-06-01 00:00:00",
	}),
	new JourneyItem({
		title: "Frontend Developer in HoraGuru", 
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus augue, porttitor eu purus ut, blandit hendrerit metus. Maecenas accumsan diam vitae risus posuere, vel aliquet enim tempor. In sollicitudin enim nec velit porttitor aliquet. Donec laoreet, lacus placerat lacinia convallis, turpis nibh vulputate metus, vitae congue erat lectus in risus. In mi ligula, placerat id lacus vitae, tincidunt sodales augue. Phasellus sit amet mollis ante. Proin eget pretium orci. Phasellus vehicula, eros eget dapibus interdum, justo mauris iaculis purus, vel posuere dui nisi volutpat purus. Donec mattis malesuada ligula id posuere.",
		start: "2022-01-01 00:00:00",
	}),
	new JourneyItem({
		title: "Study in Kazan Federal University: Computer Science", 
		comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus augue, porttitor eu purus ut, blandit hendrerit metus. Maecenas accumsan diam vitae risus posuere, vel aliquet enim tempor. In sollicitudin enim nec velit porttitor aliquet. Donec laoreet, lacus placerat lacinia convallis, turpis nibh vulputate metus, vitae congue erat lectus in risus. In mi ligula, placerat id lacus vitae, tincidunt sodales augue. Phasellus sit amet mollis ante. Proin eget pretium orci. Phasellus vehicula, eros eget dapibus interdum, justo mauris iaculis purus, vel posuere dui nisi volutpat purus. Donec mattis malesuada ligula id posuere.",
		start: "2020-09-01 00:00:00",
		end: "2023-02-01 00:00:00"
	}),
]

export {
	journeyEvents,
	JourneyItem
}