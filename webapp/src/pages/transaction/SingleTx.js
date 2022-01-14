import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { objectOf, string, bool, number, shape, func, object } from 'prop-types'
import EditTx from '../../components/transactions/EditTx'
import { DisplayTx } from '../../components/transactions/DisplayTx'
import DeleteTransaction from '../../gql/deleteTransaction.gql'
import GetTransactions from '../../gql/transactions.gql'
import { css } from '@emotion/core'

const txHeader = css`
  margin-top: 0;
  span {
    font-size: 20px;
  }
`

const buttonControls = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SingleTx = ({ tx, exitModal }) => {
  const [disabled, setDisabled] = useState(true)
  const [deleteTransaction] = useMutation(DeleteTransaction, {
    refetchQueries: [
      {
        query: GetTransactions
      }
    ]
  })

  const handleDelete = id => {
    deleteTransaction({ variables: { id: tx.id } })
    exitModal()
  }

  return (
    <>
      <h1 css={txHeader}>
        Transaction: <span>{tx.id}</span>
      </h1>
      {disabled ? (
        <>
          <DisplayTx tx={tx} />
          <div className='button-controls' css={buttonControls}>
            <button onClick={exitModal}>Cancel</button> <button onClick={() => setDisabled(false)}>Edit</button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you wish to delete this transaction?')) handleDelete(tx.id)
              }}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <EditTx exitModal={exitModal} tx={tx} />
        </>
      )}
    </>
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
      __typename: object
    })
  )
}
