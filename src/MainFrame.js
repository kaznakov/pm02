import React from 'react';
import Header from './Components/Header';
import Routing from './Components/Routing';
import {useState} from 'react'

function MainFrame(props) {
    const [accessLevel, setAccessLevel] = useState(0);
    return (
        <div>
            <Header accessLevel={accessLevel}  setAccessLevel={setAccessLevel}/>
            <Routing accessLevel={accessLevel} setAccessLevel={setAccessLevel} FrameBody={props.FrameBody}/>
        </div>
    );
}

export default MainFrame;