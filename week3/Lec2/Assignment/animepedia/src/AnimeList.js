import { Component } from "react";
import AnimeCard from './AnimeCard';
// Complete the AnimeList Component
class AnimeList extends Component {
  // console.log(anime);
  render() {
    const {anime} = this.props;
    console.log(anime);
    return <div className="anime-list">
      {anime.map((ani, index)=>(
        <AnimeCard key={index} anime={ani}/>
      ))}
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
    </div>;
  }
}

export default AnimeList;
