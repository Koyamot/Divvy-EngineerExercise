import React from 'react'
import { objectOf, string, bool, number, shape } from 'prop-types'

export const DisplayTx = ({ tx }) => {
  const { user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
  return (
    <div>
      <input disabled type='text' value={userId} />
      <input disabled type='text' value={description} />
      <input disabled type='text' value={merchantId} />
      <label>
        debit
        <input checked={debit ? 'checked' : null} disabled name='radio' type='radio' />
      </label>
      <label>
        credit
        <input checked={credit ? 'checked' : null} disabled name='radio' type='radio' />
      </label>
      <input disabled type='number' value={amount} />
    </div>
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
      amount: number
    })
  )
}
