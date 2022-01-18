import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const { t } = useTranslation()
  return (
    <div className='nav-container'>
      <div css={navBar}>
        <div className='logo'>
          <img
            alt='Coin'
            css={logo}
            src='https://www.pngitem.com/pimgs/m/137-1378758_gold-coin-png-circle-transparent-png.png'
          />
          <h1>{t('title')}</h1>
        </div>
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
    </div>
  )
}

export default NavBar

const navBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

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
  margin-right: 40px;
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
