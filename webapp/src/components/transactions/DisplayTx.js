import React from 'react'
import { objectOf, string, bool, number, shape, object } from 'prop-types'

export const DisplayTx = ({ tx }) => {
  const { user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
  return (
    <>
      <label>
        User ID:
        <input disabled name='user_id' placeholder={userId} type='text' value={userId} />
      </label>
      <label>
        description:
        <input disabled name='description' placeholder={description} type='text' value={description} />
      </label>
      <label>
        Merchant ID:
        <input disabled name='merchant_id' placeholder={merchantId} type='text' value={merchantId} />
      </label>
      <label>
        Amount
        <input disabled id='amount' name='amount' placeholder={amount} type='number' value={amount} />
      </label>
      <label>
        Debit
        <input checked={debit ? 'checked' : null} disabled name='pay' type='radio' value='debit' />
      </label>
      <label>
        Credit
        <input checked={credit ? 'checked' : null} disabled name='pay' type='radio' value='credit' />
      </label>
    </>
  )
}
DisplayTx.propTypes = {
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
