import React, { Component } from 'react';
import './app.css'
import axios from 'axios';
import MusicTable from './MusicTable';
import Song from './Song'
import SearchBar from './SearchBar/SearchBar';
import SongForm from './SongForm/SongForm';
import TitleBar from './TitleBar/titleBar';



class App extends Component {
   constructor(){
       super()

       this.getAllSongs = this.getAllSongs.bind(this)
   }
   state = {
       songs: [],
       userInput: ''
   }

   componentDidMount(){
       this.getAllSongs();
   }

    async getAllSongs(){
       let response = await axios.get('http://127.0.0.1:8000/music/')
       this.setState({
           songs: response.data
       });
    }

    mapSongs(){
        return this.state.songs.map(song =>
            <Song
                key={song.id}
                song={song}
            />
        )
    }

    async addNewSong(song){
        console.log(song)
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/', song);
            console.log(response.data)
            alert('Song Added!')
            this.setState({
                song:response.data
            });
        }
        catch(e){
            console.log(e.message)
        }
       
        
        
    }

    deleteSong(id, e){
        axios.delete(`http://127.0.0.1:8000/music/`)
          .then(res => {
            console.log(res);
            console.log(res.data);
      
            // const songs = this.state.songs.filter(item => item.id !== id);
            // this.setState({ songs });
          })
    }
    render(){
        return(
            <div>
                <TitleBar/>

                <SearchBar handleSearch={(input) => this.handleSearch.bind(input)}/>

                <MusicTable mapSongs={() => this.mapSongs()}/>

                <SongForm addNewSong={this.addNewSong.bind(this)} />
             
            </div>
        );
    }
}


    
export default App;