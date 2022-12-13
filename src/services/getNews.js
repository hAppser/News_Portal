import axios from "axios";

const getNews = () => {
    return axios.get("https://inshorts.deta.dev/news?category=all")

}

export default getNews