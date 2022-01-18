import React, { useState } from 'react'
import { objectOf, string, bool, number, shape, object, func } from 'prop-types'
import { useMutation } from '@apollo/client'
import EditTransaction from '../../gql/editTransaction.gql'
import GetTransactions from '../../gql/transactions.gql'
import * as globalstyles from '../../styles/GlobalStyles'

const EditTx = ({ tx, exitModal }) => {
  const [updatedValues, setUpdatedValues] = useState({ ...tx })
  const [payType, setPayType] = useState(tx.debit ? 'debit' : 'credit')
  const [editTransaction, { loading, error }] = useMutation(EditTransaction, {
    refetchQueries: [
      {
        query: GetTransactions
      }
    ]
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>There was an error with the edit</div>

  const handleChange = ({ target: { name, value } }) => {
    setUpdatedValues({
      ...updatedValues,
      [name]: value
    })
  }

  const onSelect = ({ target: { value } }) => {
    setPayType(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    editTransaction({
      variables: {
        ...updatedValues,
        id: updatedValues.id,
        user_id: updatedValues.user_id,
        description: updatedValues.description,
        merchant_id: updatedValues.merchant_id,
        debit: payType === 'debit',
        credit: payType === 'credit',
        amount: parseFloat(updatedValues.amount)
      }
    })
    setUpdatedValues({ ...tx })
    exitModal()
  }
  const { user_id: userId, description, merchant_id: merchantId, amount } = tx
  return (
    <form css={globalstyles.formstyles} onSubmit={handleSubmit}>
      <div className='id-type'>
        <label>
          User ID:
          <input
            name='user_id'
            onChange={handleChange}
            placeholder={userId}
            type='text'
            value={updatedValues.user_id}
          />
        </label>
        <label>
          Merchant ID:
          <input
            name='merchant_id'
            onChange={handleChange}
            placeholder={merchantId}
            type='text'
            value={updatedValues.merchant_id}
          />
        </label>
      </div>
      <div className='description'>
        <label>
          description:
          <input
            name='description'
            onChange={handleChange}
            placeholder={description}
            type='text'
            value={updatedValues.description}
          />
        </label>
      </div>
      <div className='payment-container'>
        <label>
          Amount
          <input
            id='amount'
            name='amount'
            onChange={handleChange}
            placeholder={amount}
            type='number'
            value={updatedValues.amount}
          />
        </label>
        <div className='payment-type'>
          <label>
            {' '}
            Payment Type:
            <select
              name='paytype-select'
              onBlur={e => setPayType(e.target.value)}
              onChange={onSelect}
              required
              value={payType}
            >
              <option value='debit'>Debit</option>
              <option value='credit'>Credit</option>
            </select>
          </label>
        </div>
      </div>
      <div className='button-controls'>
        <button className='hvr-ripple-out' onClick={exitModal} type='submit'>
          Cancel
        </button>
        <button className='hvr-ripple-out' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditTx

EditTx.propTypes = {
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
