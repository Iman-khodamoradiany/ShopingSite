import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Partial/Layout'
import HomePage from './Component/Ui/Page/HomePage/HomePage'
import ProductsPage from './Component/Ui/Page/ProductsPage/ProductsPage'
import ProductDeatils from './Component/Ui/Page/ProductDetails/ProductDeaatils'
import CardProduct from './Component/Ui/Page/CardProduct/CardProduct'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Products' element={<ProductsPage />} />
        <Route path={`/Products/:id`} element={<ProductDeatils />} />
        <Route path='/CardPage' element={<CardProduct />} />
      </Routes>
    </Layout>
  )
}

export default App
