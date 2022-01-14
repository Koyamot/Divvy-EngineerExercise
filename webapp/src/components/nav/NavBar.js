import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import LangSwitcher from '../i18next/LangSwitcher'
import { string } from 'prop-types'

const NavBar = ({ language }) => {
  console.log('navbar', language)
  return (
    <div css={navBar}>
      <div className='logo'>
        <img
          alt='Coin'
          css={logo}
          src='https://www.pngitem.com/pimgs/m/137-1378758_gold-coin-png-circle-transparent-png.png'
        />
        <h1>The Penny Pincher</h1>
      </div>
      <LangSwitcher lang={language} />
      <nav css={navStyle}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Account'>My Account</Link>
          </li>
          <li>
            <Link to='/BoomBox'>Boom Box</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  language: string
}

export default NavBar

const navBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 40px;

  h1 {
    margin: 0;
    margin-left: 16px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const logo = css`
  width: 50px;
`

const navStyle = css`
  grid-row: 1;
  padding: 8px;
  a {
    text-decoration: none;
    color: black;
  }
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style-type: none;
  }

  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`
