import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { Authprovider } from '../store/auth'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Authprovider>
  <BrowserRouter>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </BrowserRouter>
  </Authprovider>
)
