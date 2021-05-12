import React, { Component } from 'react';
class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            release_date: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.title)
        // console.log(this.state.album)
        // console.log(this.state.artist)
        // console.log(this.state.release_date)
        const song = {
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            release_date: this.state.release_date,
    }
    this.props.addNewSong(song);
    this.setState({
        title: '',
        album: '',
        artist: '',
        release_date: '',
    });


}
    render () {
        return(
            <div>
                <hr />
                <center className="container-fluid">
                    <h5>Add Song</h5>
                </center>
                <form className="container-fluid" onSubmit={this.handleSubmit}>
                    <div className='row col-align input-group'>
                        <div className='col-sm-4'>
                            <label>Title:</label>
                            <input className="form-control" type='text' name='title' value={this.state.title}
                            onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-4'>
                            <label>Album</label>
                            <input className="form-control" type='text' name='album' value={this.state.album}
                            onChange={this.handleChange} />
                        </div>
                        <div className='col-sm-4'>
                            <label>Artist</label>
                            <input className="form-control" type='text' name='artist' value={this.state.artist}
                            onChange={this.handleChange} />
                        </div>
                            <div className='col-sm-4'>
                            <label>Release Date</label>
                            <input className="form-control" type='date' name='release_date' value={this.state.release_date}
                            onChange={this.handleChange} />
                        </div>
                            <div className='col mt-3'>
                                <input className="btn-md btn-primary px-5" type='submit' value='Add Song' />
                            </div>
                    </div>
                        <div className='row col-align input-group'>
                    </div>
                        </form>
            </div>
        );
    }
}
export default SongForm;
                      
        
                     