import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './pages/home'
import NavBar from './components/nav/navbar'
import Account from './pages/account/account-page'
import EditTx from './components/transactions/EditTx'
import LangSwitcher from './components/i18next/LangSwitcher'

function AppRouter () {
  return (
    <Router>
      <LangSwitcher>
        <NavBar />
        <div css={layoutStyle}>
          <div className='main-content' css={contentStyle}>
            <Switch>
              <Route component={Home} exact path='/' />
              <Route component={Account} exact path='/Account' />
              <Route exact path='/Transactions/:id'>
                <EditTx />
              </Route>
              <Route exact path='/BoomBBox'>
                <h1>Boom Box</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </LangSwitcher>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
  width: 80%;
  margin: 0 auto;
`

const contentStyle = css`
  grid-row: 2;
`
