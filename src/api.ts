import axios from "axios";

class API {
	static getArticle(name:string) {
		const isDev = import.meta.env.DEV
		return axios.get(`/assets/articles/${name}`)
	}
}

export default API