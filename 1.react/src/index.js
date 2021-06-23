import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')
function tick() {
  const element = (
    <div>
      <p>时间：</p>{new Date().toLocaleTimeString()}
    </div>
  )
  ReactDOM.render(element, root)
}

setInterval(tick, 1000)