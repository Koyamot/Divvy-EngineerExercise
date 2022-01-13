import React, { useState } from 'react'
import { objectOf, string, bool, number, shape, object, func } from 'prop-types'
import { useMutation } from '@apollo/client'
import EditTransaction from '../../gql/editTransaction.gql'
import GetTransactions from '../../gql/transactions.gql'

const EditTx = ({ tx, exitModal }) => {
  const [updatedValues, setUpdatedValues] = useState({ tx })
  const [editTransaction] = useMutation(EditTransaction, {
    refetchQueries: [
      {
        query: GetTransactions
      }
    ]
  })

  const handleChange = e => {
    if (e.target.name === 'pay' && e.target.value === 'debit') {
      setUpdatedValues({
        ...updatedValues,
        [e.target.name]: e.target.value,
        credit: false,
        debit: true
      })
    } else {
      setUpdatedValues({
        ...updatedValues,
        [e.target.name]: e.target.value,
        credit: false,
        debit: true
      })
    }
  }

  const handleRadio = e => {
    if (e.target.name === 'pay' && e.target.value === 'debit') {
      setUpdatedValues({
        ...updatedValues,
        credit: false,
        debit: true
      })
    } else {
      setUpdatedValues({
        ...updatedValues,
        credit: true,
        debit: false
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await editTransaction({
        variables: {
          ...updatedValues,
          id: tx.id,
          user_id: updatedValues.user_id ? updatedValues.user_id : userId,
          description: updatedValues.description ? updatedValues.description : description,
          merchant_id: updatedValues.merchant_id ? updatedValues.merchant_id : merchantId,
          debit: updatedValues.debit,
          credit: updatedValues.credit,
          amount: parseFloat(updatedValues.amount) ? parseFloat(updatedValues.amount) : parseFloat(amount)
        }
      })
      setUpdatedValues({ updatedValues })
      exitModal()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  const { user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
  return (
    <form onSubmit={() => { if (window.confirm('Edits to this transaction cannot be undone. Do you wish to proceed?')) handleSubmit() }}>
      <label>
        User ID:
        <input
          name='user_id'
          onChange={handleChange}
          placeholder={userId}
          type='text'
          value={updatedValues.user_id ? updatedValues.user_id : userId}
        />
      </label>
      <label>
        description:
        <input
          name='description'
          onChange={handleChange}
          placeholder={description}
          type='text'
          value={updatedValues.description ? updatedValues.description : description}
        />
      </label>
      <label>
        Merchant ID:
        <input
          name='merchant_id'
          onChange={handleChange}
          placeholder={merchantId}
          type='text'
          value={updatedValues.merchant_id ? updatedValues.merchant_id : merchantId}
        />
      </label>
      <label>
        Amount
        <input
          id='amount'
          name='amount'
          onChange={handleChange}
          placeholder={amount}
          type='number'
          value={updatedValues.amount ? updatedValues.amount : amount}
        />
      </label>
      <label>
        Debit
        <input checked={debit ? 'checked' : null} name='pay' onChange={handleRadio} type='radio' value='debit' />
      </label>
      <label>
        Credit
        <input checked={credit ? 'checked' : null} name='pay' onChange={handleRadio} type='radio' value='credit' />
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
