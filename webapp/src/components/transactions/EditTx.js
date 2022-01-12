import React from 'react'
import { objectOf, string, bool, number, shape } from 'prop-types'

const EditTx = ({ tx }) => {
  const { user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
  return (
    <div>
      <input type='text' value={userId} />
      <input type='text' value={description} />
      <input type='text' value={merchantId} />
      <label>
        debit
        <input checked={debit ? 'checked' : null} name='radio' type='radio' />
      </label>
      <label>
        credit
        <input checked={credit ? 'checked' : null} name='radio' type='radio' />
      </label>
      <input type='number' value={amount} />
    </div>
  )
}

export default EditTx

EditTx.propTypes = {
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
