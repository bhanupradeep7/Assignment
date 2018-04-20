import React, { Component } from 'react';
import NewsStore from "../Store/NewsStore";
import Card from './Card'

export default class Collection extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards : NewsStore.getNews(this.props.keyValue)
        }
    }

    updateNews(){
        this.setState({
            cards : NewsStore.getNews(this.props.keyValue)
        })
    }

    componentWillMount() {
        NewsStore.on("change", this.updateNews.bind(this));
    }
    
    componentWillUnmount() {
        NewsStore.removeListener("change", this.updateNews);
    }

    render(){
        let cards = [];
        this.state.cards.map(card=> {
            cards.push(<Card key={card.id} details={card}></Card>)
        })        
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div className="clearfix cards-wrapper">{cards}</div>
            </div>
        );
    }
}