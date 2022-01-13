import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import AddTransaction from '../../gql/addTransaction.gql'
import GetTransactions from '../../gql/transactions.gql'

import { css } from '@emotion/core'
import { func } from 'prop-types'

const initialState = {
  user_id: '',
  description: '',
  merchant_id: '',
  debit: true,
  credit: false,
  amount: ''
}

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

const AddTx = ({ exitModal }) => {
  const [values, setValues] = useState({ ...initialState })
  const [addTransaction] = useMutation(AddTransaction, {
    refetchQueries: [
      {
        query: GetTransactions
      }
    ]
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
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
          debit: values.debit,
          credit: values.credit,
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
    <form css={styles} onSubmit={handleSubmit}>
      <label>
        User ID:
        <input name='user_id' onChange={handleChange} type='text' value={values.user_id} />
      </label>
      <label>
        description:
        <input name='description' onChange={handleChange} type='text' value={values.description} />
      </label>
      <label>
        Merchant ID:
        <input name='merchant_id' onChange={handleChange} type='text' value={values.merchant_id} />
      </label>
      <label>
        Amount
        <input
          id='amount'
          min={1}
          name='amount'
          onChange={handleChange}
          type='number'
          value={values.amount}
        />
      </label>
      <label>
        Debit
        <input
          checked={values.debit ? 'checked' : null}
          name='pay'
          onChange={handleChange}
          type='radio'
          value='debit'
        />
      </label>
      <label>
        Credit
        <input
          checked={values.credit ? 'checked' : null}
          name='pay'
          onChange={handleChange}
          type='radio'
          value='credit'
        />
      </label>
      <div className='button-group'>
        <button onClick={exitModal} type='submit'>
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default AddTx

AddTx.propTypes = {
  exitModal: func
}
