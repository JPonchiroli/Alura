import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import GlobalStyle from './components/GlobalStyle/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle /> 
      <AppRoutes />
  </React.StrictMode>,
)
