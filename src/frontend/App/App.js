import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import VistaDetalle from '../components/VistaDetalle/VistaDetalle'
import Album from '../components/Album/Album'


const players = [
  {"name":"Sergio","age":35, "goles": 5, "partidos": 1, "zurdo": 'Si'},
  {"name":"Pablo","age":22, "goles": 5, "partidos": 1, "zurdo": 'Si'},
  {"name":"Roberto","age":14, "goles": 5, "partidos": 1, "zurdo": 'Si'},
  {"name":"Carlos","age":75, "goles": 5, "partidos": 1, "zurdo": 'Si'},
  {"name":"Angel","age":43, "goles": 5, "partidos": 1, "zurdo": 'Si'},

]
export default function App() {
  return (
    <Router>
    <Album players={players}/>
    <Switch>
      <Route path="/" exact/>

      <Route path="/:name" render={( {match}) => <VistaDetalle players={players} name={match.params.name}/>} />
    </Switch>

    </Router>
  );
}