import React, {Component, useState } from 'react'
import Rcard from './rcard'
import Header from '../components/Header'

export class resources extends Component{

    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f183890b46974ec181793ab833591b10&q=covid";
        let data = await fetch(url);
        let parsedData = await data.json()
        
        console.log(parsedData);
        this.setState({articles: parsedData.articles, loading: true})
    }



    render() {
        return (
            <div>
            <Header/>
            <div className='container my-3'>
            <h1>Top Headlines</h1>
            <div className='row'>
                 {this.state.loading?(<>{this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                        <Rcard title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage} newsUrl={element.url}  />
                    </div>
                })}</>):(<></>) } 
            </div>
        </div>
        </div>
    )
    }
}

export default resources
