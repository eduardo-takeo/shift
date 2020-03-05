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
        const {url, urlToImage, title, description, author} = this.state.news;

        return(
            <div className="news">
                <a href={url} target="_blank">
                    <img src={urlToImage} alt="news-image" className="image" />
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                    <span className="author">{author}</span>
                </a>            
            </div>
        )
    }
}

export default News;