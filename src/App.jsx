import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Partial/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
