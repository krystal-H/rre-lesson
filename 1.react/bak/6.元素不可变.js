import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 元素更新
 * react元素本身是不可变的
 */

let element = <h1>hello</h1>
console.log(JSON.stringify(element, null, 2))
ReactDOM.render(
  element, document.getElementById('root')
)

setTimeout(() => {
  // element.props.children = 'word' xxx
  // element.type = 'p' xxx
  // element.id = 'addId' xxx
  // react17添加了属性不可扩展的特性
  // element.something = 'a' xxx
  // 只能重新声明一个
  let p = <p>world</p>
  ReactDOM.render(
    p, document.getElementById('root')
  )
}, 2000);