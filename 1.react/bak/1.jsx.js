import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 在react新的版本里，不再需要引入React变量
 * JSX 只是react团队提供的一个语法糖
 * React元素是构建react应用的最小单位
 */

let element = <h1>hello</h1>
// let element = React.createElement('h1', null, 'hello')
console.log(JSON.stringify(element, null, 2))

// 所谓的渲染就是按照react元素所描述的结构，创建真实的dom元素，并插入root容器内
// 会由reactDOM来确定浏览器的真实DOM和虚拟DOM一致
ReactDOM.render(
  element, document.getElementById('root')
)


/**
 * 虚拟DOM 其实就是一个普通的JS对象
 * jsx  element = {
          "type": "h1", // 元素类型
          "key": null,  // 是用来区分同一个父亲的不同的儿子的  dom-diff
          "ref": null, // 获取真实dom元素
          "props": { // 元素属性
            "children": "hello"
          },
          "_owner": null,
          "_store": {}
        }
 */
