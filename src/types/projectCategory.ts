class ProjectCategory{
	id:number
	name:string
	color:string

	constructor(id:number, name:string, color:string) {
		this.id = id
		this.name = name
		this.color = color		
	}

	toSelectableItem(){
		return {
			title: this.name,
			value: this.id,
		}
	}
}

export default ProjectCategory