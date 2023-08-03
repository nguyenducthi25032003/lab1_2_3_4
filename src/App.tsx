import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Calculator from './components/Calculator'
import Login from './components/Login'
import Form from './components/Form'
import ParentMount from './components/ParentMount'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import Caculate from './components/lab-redux/Caculate'
import ShowInfo from './components/lab-redux/ShowInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <header>
          {/* <Counter></Counter>
          <Calculator></Calculator> */}
          {/* <Login></Login> */}
           <Form></Form> 
           <br />
           <br />
           <br />
          {/* <ParentMount></ParentMount>
          <ComponentA></ComponentA>
          <ComponentB></ComponentB> */}
          <Caculate></Caculate>
          <ShowInfo></ShowInfo>
        </header>
      </div>
   
  )
}

export default App
