import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import AddTransaction from '../../gql/addTransaction.gql'
import GetTransactions from '../../gql/transactions.gql'
import { func } from 'prop-types'
import * as globalstyles from '../../styles/GlobalStyles'

const initialState = {
  user_id: '',
  description: '',
  merchant_id: '',
  debit: true,
  credit: false,
  amount: ''
}

const AddTx = ({ exitModal }) => {
  const [payType, setPayType] = useState('debit')
  const [values, setValues] = useState({ ...initialState })
  const [addTransaction] = useMutation(AddTransaction, {
    refetchQueries: [
      {
        query: GetTransactions
      }
    ]
  })

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSelect = ({ target: { value } }) => {
    setPayType(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addTransaction({
        variables: {
          ...values,
          user_id: values.user_id,
          description: values.description,
          merchant_id: values.merchant_id,
          debit: payType === 'debit',
          credit: payType === 'credit',
          amount: parseFloat(values.amount)
        }
      })
      setValues({ ...initialState })
      exitModal()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return (
    <form css={globalstyles.formstyles} onSubmit={handleSubmit}>
      <h1>Add Transaction</h1>
      <div className='id-type'>
        <label htmlFor='user_id'>
          User ID:
          <input id='user_id' name='user_id' onChange={handleChange} required type='text' value={values.user_id} />
        </label>
        <label htmlFor='merchant_id'>
          Merchant ID:
          <input id='merchant_id' name='merchant_id' onChange={handleChange} required type='text' value={values.merchant_id} />
        </label>
      </div>
      <div className='description'>
        <label htmlFor='description_id'>
          Description:
          <input id='description' name='description' onChange={handleChange} required type='text' value={values.description} />
        </label>
      </div>
      <div className='payment-container'>
        <label htmlFor='amount'>
          Amount:
          <input id='amount' min={1} name='amount' onChange={handleChange} required type='number' value={values.amount} />
        </label>
        <div className='payment-type'>
          <label htmlFor='pay-type'>
            {' '}
            Payment Type:
            <select
              id='pay-type'
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
        <button className='hvr-ripple-out' data-testid='cancel-button' onClick={exitModal} type='submit'>
          Cancel
        </button>
        <button className='hvr-ripple-out' data-testid='submit-button' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddTx

AddTx.propTypes = {
  exitModal: func
}
