import React from 'react';

export default function FichaTecnica (props){
  

    return (
      <div>
        {props.match}
      {props.players.map(item =>{
          return (item.name===props.name) ? (<div>
            <p><strong>Nombre:</strong> {item.name}</p>
            <p><strong>Edad:</strong> {item.age}</p>
            <p><strong>Goles:</strong> {item.goles}</p>
            <p><strong>Partidos:</strong> {item.partidos}</p>
            <p><strong>Zurdo:</strong> {item.zurdo}</p>
          </div>
          ):(
            null
          )
        }

        )}
      </div>);
  }
