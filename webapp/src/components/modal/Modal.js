import React from 'react'

import { css } from '@emotion/core'
import { bool, node } from 'prop-types'

const Modal = ({ children, isVisible }) => {
  return (
    <>
      {isVisible && (
        <div className='outer-modal' css={outer}>
          <div className='middle' css={middle}>
            <div css={modal}>{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

const middle = css`
  display: table-cell;
  vertical-align: middle;
`
const outer = css`
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const modal = css`
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  background-color: white;
`

export default Modal

Modal.propTypes = {
  children: node,
  isVisible: bool
}
