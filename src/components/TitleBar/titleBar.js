import React from 'react';
import './titleBar.css';

function TitleBar(props) {
    return (
        <div className="text-align">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titleBar-nav">
                    <h1>Sebastian's Music Library</h1>
                </div>
            </div>
        </div>
    );
}

export default TitleBar;