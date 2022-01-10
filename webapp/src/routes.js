import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './pages/home'
import NavBar from './components/nav/navbar'
import Account from './pages/account/account-page'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <NavBar />
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Account} exact path='/Account' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const contentStyle = css`
  grid-row: 2;
`
