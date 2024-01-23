import './App.css'
import Outcomponent from './OutComponent';

// 定义一个函数式组件。函数式组件的名称必须以大写字母开头， 并且建议单独定义在一个文件中。
function Info(){
  return <>
    <h2>这是一个信息</h2>
    <p>这是一个信息的内容</p>
    <Outcomponent />
  </>
}

// 定义一个函数式组件
function App() {
  const name = "苗子说全栈";
  return <>
    <h1>{name} 我的第一个函数式组件</h1>
    <Info />
    <Info />
  </>
}

export default App
