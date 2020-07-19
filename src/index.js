import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//let value = 0;
const [value,setValue] = useState(0);
//const onClick = e => setValue(e.target.value);
useEffect(() =>{
  const handler = ()=>{
    setValue(value);
  };
},[value]);
function Board() {
  const status = 'Next player: X';
  return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value ={0}/>
          <Square value ={1}/>
          <Square value ={2}/>
        </div>
        <div className="board-row">
        <Square value ={3}/>
        <Square value ={4}/>
        <Square value ={5}/>
        </div>
        <div className="board-row">
        <Square value ={6}/>
        <Square value ={7}/>
        <Square value ={8}/>
        </div>
      </div>
    );
}
/*function Show(){
  const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value ={0}/>
          <Square value ={1}/>
          <Square value ={2}/>
        </div>
        <div className="board-row">
        <Square value ={3}/>
        <Square value ={4}/>
        <Square value ={5}/>
        </div>
        <div className="board-row">
        <Square value ={6}/>
        <Square value ={7}/>
        <Square value ={8}/>
        </div>
      </div>
    );
}
/*function RenderSquare(props) {
  return (
    <div>
      <Square value ={value}/>
    </div>
  );
}*/
function Square(props){
  return (
    <button className="square">
      {value}
    </button>
  );
}


ReactDOM.render(
  <Board />,
  document.getElementById('root')
);


