import React, { useState } from 'react'
import { objectOf, string, bool, number, shape, func } from 'prop-types'
import { css } from '@emotion/core'
import EditTx from '../../components/transactions/EditTx'
import { DisplayTx } from '../../components/transactions/DisplayTx'

const styles = css`
  height: 400px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 16px;

  span {
    font-size: 16px;
  }
`

const SingleTx = ({ tx, exitModal }) => {
  const [disabled, setDisabled] = useState(true)
  return (
    <div className='tx-modal' css={styles}>
      <h1>
        Transaction: <span>{tx.id}</span>
      </h1>
      {disabled ? (
        <>
          <DisplayTx tx={tx} /> <button onClick={exitModal}>Cancel</button> <button onClick={() => setDisabled(false)}>Edit</button>
        </>
      ) : (
        <>
          <EditTx tx={tx} />
          <button onClick={exitModal}>Cancel</button> <button>Save</button>
        </>
      )}
    </div>
  )
}

export default SingleTx

SingleTx.propTypes = {
  exitModal: func,
  tx: objectOf(
    shape({
      id: string,
      user_id: string,
      description: string,
      merchant_id: string,
      debit: bool,
      credit: bool,
      amount: number,
      __typename: string
    })
  )
}
