import React, { Component } from 'react'
import image1 from './image/elon-musk.jpg'
 class App extends Component {
  constructor(props){
    super(props);
    this.state={
  person:{
    fullName:"elon Musk",
    bio:"Entrepeneur",
    imgSrc:image1,
    profession:"CEO of TESLA Motors"
  },
  shows:false,
  mountedTime:new Date(),
};
  }
     toggleShows=()=>{
      this.setState((prevState)=>({
        shows: !prevState.shows
      }));
     }
     componentDidMount() {
      this.interval = setInterval(() => {
        this.forceUpdate(); 
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  render() {
    const {person,shows,mountedTime}=this.state;
    return (
      <div>
              {shows && (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt={person.fullName} />
          <p>{person.profession}</p>
        </div>
      )}
      <button onClick={this.toggleShows}>show this person</button>
      <p>Component mounted for: {Math.floor((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    )
  }
}
export default App;
