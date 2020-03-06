import React, { Component } from 'react';
import './CategoryNews.css';

const apiKey = 'a24d2b250d22499ba08377086438230d';

class CategoryNews extends Component {
    constructor({ category }) {
        super(category);
        this.state = {
            news: [], 
            category: category
        }
    }

    componentWillMount() {
        fetch(`http://newsapi.org/v2/sources?category=${this.state.category}&language=en&apiKey=${apiKey}`)
        .then(data => data.json())
        .then(data => {
            this.setState({news: data.sources[this.props.articleNumber]})
        })
        .catch(error => console.log(error));
    }

    render() {
        const {name, description, country, url} = this.state.news;

        return(
            <div className="news">
                <a href={url} target="_blank">
                    <h2>{ name }</h2>
                    <p className="description">{ description }</p>
                    <p className="country">{ country }</p>
                </a>
            </div>
        )
    }
}

export default CategoryNews;