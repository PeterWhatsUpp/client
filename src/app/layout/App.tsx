import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import About from '../../features/about/About'
import Catalog from '../../features/catalog/Catalog'
import ProductDetails from '../../features/catalog/ProductDetails'
import Contact from '../../features/contact/Contact'
import Home from '../../features/home/Home'
import { Product } from '../models/product'
import Header from './Header'
import 'react-toastify/dist/ReactToastify.css';
import ServerError from '../errors/ServerError'
import NotFound from '../errors/NotFound'

function App() {
  

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
        <ToastContainer theme='colored' position='bottom-right' hideProgressBar/>
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
                <Catalog />
              }
            />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/server-error" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
