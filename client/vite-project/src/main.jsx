import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { apiSlice } from './app/apiSlice.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={apiSlice} >
        <BrowserRouter>
        <App />      
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
)