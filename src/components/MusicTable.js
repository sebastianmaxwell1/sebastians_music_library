import React from 'react'

const MusicTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release_date</th>
                    <th>Delete</th><button className="btn btn-danger" onClick={(e) => this.deleteSong}>Delete</button>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}


 
export default MusicTable;
