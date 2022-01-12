import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import AddTransaction from '../../gql/addTransaction.gql'
import GetTransactions from '../../gql/transactions.gql'

// import { css } from '@emotion/core'
// import styled from '@emotion/styled'

const initialState = {
  user_id: '',
  description: '',
  merchant_id: '',
  debit: true,
  credit: false,
  amount: ''
}

const AddTx = () => {
  const [values, setValues] = useState({ ...initialState })
  const [addTransaction] = useMutation(AddTransaction, {
    refetchQueries: [
      {
        query: GetTransactions
      }
    ]
  })

  const handleChange = e => {
    console.log(e.target.value)
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
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        Debit
        <input checked={values.debit ? 'checked' : null} name='pay' onChange={handleChange} type='radio' value='debit' />
      </label>
      <label>
        Credit
        <input checked={values.credit ? 'checked' : null} name='pay' onChange={handleChange} type='radio' value='credit' />
      </label>
      <label>
        Amount
        <input onChange={handleChange} type='number' value={values.amount} />
      </label>
      <button to='/Account' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default AddTx
