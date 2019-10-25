import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
