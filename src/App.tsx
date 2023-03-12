import { useState } from 'react'
import styles from './App.module.css'
import { CreaterTask } from './components/CreaterTask';
import { Header } from './components/Header';
import { Panel } from './components/Panel';


function App() {

  return (
    <div>
      <Header />
      <CreaterTask />
      <Panel/>
    </div>
    
  )
}

export default App
