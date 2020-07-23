import React from 'react'; 
import './game.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Game extends React.Component{
    render() {
        return(
            <div className="Board"
            style={{ width: WIDTH, height: HEIGHT}}></div>
        )
    }
}

export default Game