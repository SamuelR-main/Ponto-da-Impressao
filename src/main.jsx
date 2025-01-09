import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './Styles/global-styles'
import Homepage from './Pages/Homepage/index-homepage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Homepage />
  </React.StrictMode>,
)
