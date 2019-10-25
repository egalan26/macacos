import React from 'react';
import './Album.css';
import VistaDetalle from '../VistaDetalle/VistaDetalle'

import PlayerCard from '../PlayerCard/PlayerCard'
const Children = ({match}) => (
  <div>
  <h3>ID:  {match.params.id}</h3>
  </div>
)
export default class Album extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      
    }
  };
  handleClick(e) {
    e.preventDefault();
    console.log(e.target.href);

  }
  render(){
    return (
      <div>

        <div className="Album">

          {this.props.players.map(item =>
            <PlayerCard name={item.name} age={item.age} onClick={this.handleClick} players={this.props.players}/>
          )}
          <br/>


        </div>
      </div>
    );
  }
}
