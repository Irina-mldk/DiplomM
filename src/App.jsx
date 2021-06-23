import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'

import {store} from './store'
import {GlobalStyles} from './constants/globalStyles'
import {theme} from './constants/theme'
import SiteRouter from './router'
import Loader from './components/Loader'


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SiteRouter />
        <Loader />
      </ThemeProvider>
    </Provider>
  )
}

export default App
