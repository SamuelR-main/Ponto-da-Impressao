import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './Styles/global-styles'
import Homepage from './Pages/Homepage/index-homepage'
import Rotas from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas />
    <GlobalStyles />
  </React.StrictMode>
);
