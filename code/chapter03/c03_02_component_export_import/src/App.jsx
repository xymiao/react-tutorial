import './App.css'
import Info from './Info';
import OutComponent from './OutComponent';

// 定义一个函数式组件
function App() {
  const name = "苗子说全栈";
  return (<>
    <h1>{name} 组件的导出和导入</h1>
    <Info />
    <OutComponent />
  </>)
}

export default App
