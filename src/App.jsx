import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Partial/Layout'
import HomePage from './Component/Ui/Page/HomePage/HomePage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App
