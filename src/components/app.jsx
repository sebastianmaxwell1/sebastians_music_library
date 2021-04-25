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
       filteredSongs: [],
       userInput: ''
   }

   editSearchTerm = (e) => {
       this.setState({searchTerm: e.target.value})
   }

   dynamicSearch = (songs) => {
     return this.state.data.filteredSongs(song => songs.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

   }

   filterTable(input){

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
        if(this.state.userInput === ''){
            return this.state.songs.map(song =>
                <Song
                    key={song.id}
                    song={song}
                    deleteSong={(songId) => this.deleteSong(songId)}
                />
            );
        }
        else{
            return this.state.filteredSongs.map(song =>
                <Song
                key={song.id}
                song={song}
                deleteSong={(songId) => this.deleteSong(songId)}
                />
            );
        }
    }

    addSong(songId){
    }

    async deleteSong(songId){
        await axios.delete('http://127.0.0.1:8000/music/${songId}/');
        this.getAllSongs();
    }

    render(){
        // console.log("this.state", this.state);
        return(
            <div>
                <SearchBar filterTable={(input) => this.filterTable(input)}/>

                <MusicTable mapSongs={() => this.mapSongs()}/>

                <SongForm addSong={(song) => this.addSong(song)}/>
            </div>
        );
    }
}
   

    
export default App;