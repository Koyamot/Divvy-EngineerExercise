import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { css, Global } from '@emotion/core'
import { Home } from './pages/home'
import NavBar from './components/nav/navbar'
import Account from './pages/account/account-page'
import EditTx from './components/transactions/EditTx'
import { globalStyles } from './styles/GlobalStyles'
import Cookies from 'js-cookie'

function AppRouter () {
  const lang = Cookies.get('i18next')
  console.log('this is language/routes :', lang)
  return (
    <Router>
      <Global styles={globalStyles} />
      <div className={`globalstyles ${lang}-lang`}>
        <NavBar language={lang} />
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
