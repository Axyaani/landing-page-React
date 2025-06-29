import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Notification from './Notification.jsx'
import Header from './Header.jsx'
import App from './App.jsx'
import Product from './Product.jsx'


createRoot(document.getElementById('root')).render(
 <>
 <Notification/>
 <Header/>
 <App/>
 <Product/>
    
 </>


)
