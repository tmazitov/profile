class Skill {
	id:number
	duration: number
	name:string
	icon:string
	description:string
	color:string

	constructor(data:any) {
		this.id = data.id
		this.name = data.name
		this.icon = data.icon
		this.duration = data.duration
		this.description = data.description
		this.color = data.color
	}

	durationString() {
		if (this.duration == 1)
			return this.duration + " year"
		if (this.duration == 0)
			return "less than a year"
		return this.duration + " years"
	}
}

export default Skill