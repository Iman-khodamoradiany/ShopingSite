import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Partial/Layout'
import HomePage from './Component/Ui/Page/HomePage/HomePage'
import ProductsPage from './Component/Ui/Page/ProductsPage/ProductsPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Products' element={<ProductsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
