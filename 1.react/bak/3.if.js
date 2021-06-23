import React from 'react';
import ReactDOM from 'react-dom';

/**
 * jsx可以作为函数的参数和返回值
 */

function greeting(name) {
  return name ? <h5>hello,{name}</h5> : <h5>hello, stranger</h5>
}
let element = greeting('cy')
ReactDOM.render(
  element, document.getElementById('root')
)