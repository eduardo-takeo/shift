import React, { Component } from 'react';
import './News.css';

const apiKey = 'a24d2b250d22499ba08377086438230d';

class News extends Component {
    constructor() {
        super();
        this.state = {
            news: []
        }
    }

    componentWillMount() {
        fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(data => data.json())
        .then(data => {
            this.setState({news: data.articles[this.props.articleNumber]})
        })
        .catch(error => console.log(error));

    }

    render() {
        return(
            <div className="news">
                <a href={this.state.news.url} target="_blank">
                    <img src={this.state.news.urlToImage} alt="news-image" className="image" />
                    <h2 className="title">{this.state.news.title}</h2>
                    <p className="description">{this.state.news.description}</p>
                    <span className="author">{this.state.news.author}</span>
                </a>            
            </div>
        )
    }
}

export default News;