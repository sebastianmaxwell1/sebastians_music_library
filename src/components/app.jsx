import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable';
import Song from './Song'
import SongForm from './SongForm/SongForm';
import TitleBar from './TitleBar/titleBar';
import SearchBar from './SearchBar/SearchBar'




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
                deleteSongs={(id) => this.deleteSongs(id)}
            />,
        );
    }

    async deleteSongs(id){
        await axios.delete('http://127.0.0.1:8000/music/'+id+'/');
        this.getAllSongs()
    }

    async addSong(song){
        console.log(song)
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/', song);
            // console.log(response.data)
            alert('Song Added!')
            this.setState({
                song:response.data
            });
        }
        catch(e){
            console.log(e.message)
        }
    
    }
    
    render() {
        return(
            <div>
                <TitleBar/>

                <SearchBar />

                <SongForm addSong={this.addSong.bind(this)} />
                <MusicTable mapSongs={() => this.mapSongs()}/>

    
            </div>
        );
    }
}


// <SelectColumnFilter filter={() => this.filter()}/> <=== would not let me comment out above
    
export default App;

// {/* <SongForm addSong={this.addSong.bind(this)} /> */}
/* <MusicTable mapSongs={() => this.mapSongs()}/> */