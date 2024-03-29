import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/styles.css'
import App from './app/layout/App'
import reportWebVitals from './reportWebVitals'
import { customHistory, CustomRouter } from './app/routing/CustomRouter'
import { Provider } from 'react-redux'
import { store } from './app/store/configureStore'
import { fetchProductsAsync } from './features/catalog/catalogSlice'

store.dispatch(fetchProductsAsync());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <CustomRouter history={customHistory}>
        <Provider store={store}>
          <App />
        </Provider>
    </CustomRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
