import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      source: { id: null, name: "ESPNcricinfo" },
      author: "Staff Writer",
      title: "India clinch thriller in last over to seal T20I series 3–2",
      description: "A nervy finish in Kolkata saw India edge past Australia with two balls to spare.",
      urlToImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60"
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: "Cricbuzz Staff",
      title: "Shubman Gill ruled out of Asia Cup opener with hamstring niggle",
      description: "Team management takes a cautious approach ahead of packed calendar.",
      urlToImage: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=800&q=60"
    },
    {
      source: { id: null, name: "BBC Sport" },
      author: "BBC Sport",
      title: "England recall Archer for South Africa ODI series",
      description: "Fast bowler Jofra Archer returns after managing his workload through the T20 summer.",
      urlToImage: "https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg"
    }
  ]
 constructor(){
  super();
  console.log("Hello I am constructor from News component");
  this.state={
   articles:this.articles,
   loading:false
  }
 }
  render() {
    return (
      <div className="container my-3">
        <h2>News-Monkey Top Headlines</h2>
      
        <div className="row">
         {this.state.articles.map((element) => (
        <div className="col-md-4" key={element.title}>
        <NewsItem
        title={element.title}
        description={element.description}
        imageUrl={element.urlToImage}
        newsUrl={element.url}
          />
        </div>
      ))}
        </div>
      </div>
    )
  }
}

export default News
