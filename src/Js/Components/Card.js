import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let text = this.props.details.content.plain.toString();
        if(text.length > 180){
            text = text.slice(0,180) + "..."
        }

        return (
            <a className="card-wrapper" href={this.props.details.link} target="_blank">
                <div className="card-image-wrapper" >
                    <img src={this.props.details.image}/>
                    <h4>{this.props.details.title}</h4>
                </div>
                <h4 className="card-author">By: {this.props.details.author}</h4>
                <p className="card-content text-ellipsis">{text}</p>
            </a>
        )
    }
}