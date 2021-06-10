import React from 'react'


const MusicTable = (props) => {
    console.log(props)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release_date</th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}


 
export default MusicTable;





