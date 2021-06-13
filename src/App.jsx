import React, { useState } from 'react';
import Routes from 'routes/routes'
import logo from './logo.svg'
import { Button } from 'antd';
import 'antd/es/button/style/css'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite React Wordpress theme!</p>
        <p>
          <Button size="large" type="primary" onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <Routes />
      </header>
    </div>
  )
}

export default App
