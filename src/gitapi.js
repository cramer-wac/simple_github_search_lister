import axios from 'axios';


class Gitapi{

    constructor(
        url = 'https://api.github.com/search/repositories',
        client = axios.create()
    ){
        this.url = url;
        this.client = client;
    }


    getRepos(query) {
        return this.client.get(this.url + '?q=' + query)
    }

}

export default Gitapi