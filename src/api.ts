import axios from "axios";

class API {

	static root = import.meta.env.DEV? '/src' : '/profile'

	static getArticle(name:string) {
		return axios.get(`${this.root}/assets/articles/${name}`)
	}
}

export default API