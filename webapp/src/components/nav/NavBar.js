import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

const NavBar = () => {
  return (
    <div>
      <nav css={navStyle}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Account'>My Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const navStyle = css`
  grid-row: 1;

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
export default NavBar
