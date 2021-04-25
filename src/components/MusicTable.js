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
                    <th>Delete</th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}


 
export default MusicTable;
