import React from 'react';
import ReactDOM from 'react-dom';

let names = ['a', 'b', 'c']
let elements = []
for(let i = 0; i < names.length; i++) {
  elements.push(<h2>{names[i]}</h2>)
}
ReactDOM.render(
  elements, document.getElementById('root')
)