import axios from "axios";

class API {
	static getArticle(name:string) {
		const isDev = import.meta.env.DEV
		return axios.get(`${isDev ? '/src' : ''}/assets/articles/${name}`)
	}
}

export default API