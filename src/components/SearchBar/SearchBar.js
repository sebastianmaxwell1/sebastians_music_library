import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
          userInput: ''
        }
      }
    
      handleSearch (e) {
        this.setState({ songs: e.target.value })
      }
    
      handleGoClick () {
        if (!this.props.songs.isFetchingSong) {
          this.props.actions.fetchSong(this.state)
        }
      }
    
      render () {
        return (
          <div className='searchbar-container'>
            <form onSubmit={e => e.preventDefault()}>
              <input
                type='text'
                size='45'
                placeholder='Search Music Library'
                onChange={this.handleSearch.bind(this)}
                value={this.state.songs} />
              <button
                type='submit'
                onClick={this.handleGoClick.bind(this)}>
                Search
              </button>
            </form>
          </div>
        )
      }
    }


export default SearchBar;