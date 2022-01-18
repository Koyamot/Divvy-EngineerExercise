import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { css } from '@emotion/core'
import { HomePage } from './pages/home'
import NavBar from './components/nav/navbar'
import Account from './pages/account/account-page'
import EditTx from './components/transactions/EditTx'
import LangSwitcher from './components/i18next/LangSwitcher'
import Art from './pages/home/Art'
import { useKonamiCode } from './components/konami/useKonamiCode'

function AppRouter () {
  const konami = useKonamiCode()
  return (
    <Router>
      <LangSwitcher>
        {konami ? (
          <Route component={Art} exact path='/' />
        ) : (
          <>
            <NavBar />
            <div css={layoutStyle}>
              <div className='main-content' css={contentStyle}>
                <Switch>
                  <Route component={HomePage} exact path='/' />
                  <Route component={Account} exact path='/Account' />
                  <Route exact path='/Transactions/:id'>
                    <EditTx />
                  </Route>
                  <Route component={Art} exact path='/BoomBox' />
                </Switch>
              </div>
            </div>
          </>
        )}
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
