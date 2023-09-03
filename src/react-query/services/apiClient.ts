import axios from "axios";

const axiousInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiousInstance.get<T[]>(this.endpoint)
        .then(res => res.data)
    }

    post = (data: T) => {
        return axiousInstance.post<T>(this.endpoint, data)
        .then(res => res.data);
    }
}

export default APIClient;