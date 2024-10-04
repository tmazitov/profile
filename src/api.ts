import axios from "axios";

class API {
	static getArticle(name:string) {
		return axios.get(`/src/assets/articles/${name}`)
	}
}

export default API