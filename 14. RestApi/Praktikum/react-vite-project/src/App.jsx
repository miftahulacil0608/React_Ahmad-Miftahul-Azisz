import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'
import CreateProduct from './pages/CreateProduct'
import LandingPage from './pages/LandingPage'
import DetailProducts from './pages/DetailProducts'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/create-product' element={<CreateProduct />} />
      <Route path='/products-details/:id' element={<DetailProducts />} />
    </Routes>
  )
}

export default App