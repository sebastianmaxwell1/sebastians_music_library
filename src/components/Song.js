
import React from 'react';


const Song = (props) => {
    return (          
        <tbody> 
       
            <tr>                
                <td>{props.song.id} <button onClick={() => props.deleteSongs(props.song.id)}>Delete song </button>  </td>          
                <td>{props.song.title}</td>
                <td>{props.song.artist}</td>
                <td>{props.song.album}</td>
                <td>{props.song.release_date}</td>
            </tr>          
          
            
        </tbody>
        
    );
}

export default Song;

