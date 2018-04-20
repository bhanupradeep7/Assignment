import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class NewsStore extends EventEmitter {
    constructor() {
        super();
        this.news = [];
        this.hotNews = [];
        this.risingNews = [];

        this.updateNews()
    }

    updateNews(){
        let url="https://mashable.com/stories.json?hot_per_page=2&new_per_page=20&rising_per_page=3&channel=tech&new_after=1Dvhfi";
        fetch(url)
            .then(result => {
                return result.json()
            })
            .then(responseJson => {
                console.log(responseJson);
                this.news = responseJson.new;
                this.hotNews = responseJson.hot;
                this.risingNews = responseJson.rising;
                this.emit("change");
            })
            .catch(error => {
                console.log(error)
            })
    }

    getNews(value) {
        return this[value];
    }
}
const newsStore = new NewsStore;
// dispatcher.register(newsStore.handleActions.bind(newsStore));

export default newsStore;