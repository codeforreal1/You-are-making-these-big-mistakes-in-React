import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.Suspense fallback={null}>
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/404" render={() => <p>Page not found</p>} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
)
