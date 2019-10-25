import React from 'react';
import FichaTecnica from '../FichaTecnica/FichaTecnica'




export default function VistaDetalle(props){

    return (
      <div>
        <h1>VISTADETALLE {props.name}</h1>
        <FichaTecnica name={props.name} players={props.players}/>
        </div>
    );
}
