import React, { Component } from 'react';
// import './app.css'
import axios from 'axios';
import MusicTable from './MusicTable';
import Song from './Song'
import SongForm from './SongForm/SongForm';
import TitleBar from './TitleBar/titleBar';
import './TitleBar/titleBar.css'
import FilteredTable from './FilterTable'



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

    // async updateSong(song){
    //     song.preventDefault();
    //     const editSong = {
    //         title: this.state.title,
    //         artist: this.state.artist,
    //         albim: this.state.album,
    //         release_date: this.state.release_date
    //     }
    //     axios.put('http://127.0.0.1:8000/music/', song)
    //     .then(res => console.log(res.data));
    //     } 
    
        
    

    async removeSong(song) {
	    song.preventDefault();
	    axios.delete('http://127.0.0.1:8000/music/', song)
        .then(res => console.log(res.data));
}
    
    render() {
        return(
            <div>
                <TitleBar/>


                <FilteredTable/>

                

             
            </div>
        );
    }
}


// <SelectColumnFilter filter={() => this.filter()}/> <=== would not let me comment out above
    
export default App;

// <MusicTable mapSongs={() => this.mapSongs()}/>
// <SongForm addNewSong={this.addNewSong.bind(this)} />