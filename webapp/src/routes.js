import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './pages/home'
import NavBar from './components/nav/navbar'
import Account from './pages/account/account-page'
import EditTx from './components/transactions/EditTx'

function AppRouter () {
  return (
    <Router>
      <NavBar />
      <div css={layoutStyle}>
        <div className='main-content' css={contentStyle}>
          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Account} exact path='/Account' />
            <Route exact path='/Transactions/:id'>
              <EditTx />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
  width: 80%;
  margin: 0 auto;
  padding: 8px;
`

const contentStyle = css`
  grid-row: 2;
`
