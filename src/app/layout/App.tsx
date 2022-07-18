import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../features/about/About'
import Catalog from '../../features/catalog/Catalog'
import ProductDetails from '../../features/catalog/ProductDetails'
import Contact from '../../features/contact/Contact'
import Home from '../../features/home/Home'
import { Product } from '../models/product'
import Header from './Header'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5175/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const addProducts = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: `product ${prev.length + 1}`,
        description: `description ${prev.length + 1}`,
        price: prev.length * 100,
        pictureUrl: 'foo',
        brand: 'brand',
      },
    ])
  }

  const [darkMode, setDarkMode] = useState(false)
  const paletteColor = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteColor,
      background: {
        default: paletteColor === 'light' ? '#eaeaea' : '#121212',
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/catalog"
              element={
                <Catalog products={products} addProducts={addProducts} />
              }
            />
            <Route path="/catalog/:id" element={<ProductDetails />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
