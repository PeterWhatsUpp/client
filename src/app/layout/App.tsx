import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import About from '../../features/about/About'
import Catalog from '../../features/catalog/Catalog'
import ProductDetails from '../../features/catalog/ProductDetails'
import Contact from '../../features/contact/Contact'
import Home from '../../features/home/Home'
import Header from './Header'
import 'react-toastify/dist/ReactToastify.css'
import ServerError from '../errors/ServerError'
import NotFound from '../errors/NotFound'
import BasketPage from '../../features/basket/BasketPage'
import { getCookie } from '../util/util'
import agent from '../api/agent'
import LoadingComponent from './LoadingComponent'
import CheckoutPage from '../../features/checkout/CheckoutPage'
import { useAppDispatch } from '../store/configureStore'
import { setBasket } from '../../features/basket/basketSlice'

function App() {
  const dispatch=useAppDispatch();
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    const buyerId=getCookie('buyerId'); 
    if (buyerId) {
      agent.Basket.get()
      .then(basket => dispatch(setBasket(basket)))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false));
    }
    else{
      setLoading(false);
    }
  },[dispatch(setBasket)])

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

  if (loading) return <LoadingComponent message='Initialising app..'/>

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          theme="colored"
          position="bottom-right"
          hideProgressBar
        />
        <CssBaseline />
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/server-error" element={<ServerError />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
