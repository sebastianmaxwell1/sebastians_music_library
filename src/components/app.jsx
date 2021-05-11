import React, { Component } from 'react';
import './app.css'
import axios from 'axios';
import MusicTable from './MusicTable';
import Song from './Song'
import SearchBar from './SearchBar/SearchBar';
import SongForm from './SongForm/SongForm';



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

    // mapSongs(){
    //     if(this.state.userInput === ''){
    //         return this.state.songs.map(song =>
    //             <Song
    //                 key={song.id}
    //                 song={song}
    //                 deleteSong={(song) => this.deleteSong(song)}
    //             />
    //         );
    //     }
    //     else{
    //         return this.state.filteredSongs.map(song =>
    //             <Song
    //             key={song.id}
    //             song={song}
    //             deleteSong={(songId) => this.deleteSong(songId)}
    //             />
    //         );
    //     }
    // }

    async addSong(song){
        let response = await axios.post('http://127.0.0.1:8000/music/', song);
        console.log(response.data)
        alert('Song Added!')
        this.setState({
            song:response.data
        });
        
    }

    // async deleteSong(Id){
    //     await axios.delete('http://127.0.0.1:8000/music/+/');
    //     this.getAllSongs();
    // }

    render(){
        return(
            <div>
                <SearchBar handleSearch={(input) => this.handleSearch.bind(input)}/>

                <MusicTable mapSongs={() => this.mapSongs()}/>

                <SongForm addSong={this.addSong.bind(this)} />
            </div>
        );
    }
}
   

    
export default App;