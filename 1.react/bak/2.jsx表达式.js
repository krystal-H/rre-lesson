import React from 'react';
import ReactDOM from 'react-dom';

/**
 * jsx表达式  表达式就是变量 常量 操作符 混合在一起的组合
 * 表达式可以是计算的  且肯定会由一个返回值
 * jsx更像js
 * class => className for => htmlFor
 */

const title = 'hello'
const style = {
  color: 'lightblue'
}
let element = <h1 style={style} className='active'>{title + ' world'}</h1>
ReactDOM.render(
  element, document.getElementById('root')
)