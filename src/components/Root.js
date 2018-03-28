import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Onboarding from './onboarding'
import Authentication from './authentication'
import Seed from './seed'
import theme from '../theme'

const hello = () => <h1>Hello world</h1>

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Route path='/onboarding' component={Onboarding} />
        <Route path='/authenticate' component={Authentication} />
        <Route path='/seed' component={Seed} />
      </div>
    </Router>
  </ThemeProvider>
)

export default Root
