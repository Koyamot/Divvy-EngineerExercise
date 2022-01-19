import React, { useState } from 'react'
import { objectOf, string, bool, number, shape, object } from 'prop-types'
import * as globalstyles from '../../styles/GlobalStyles'

export const DisplayTx = ({ tx }) => {
  const [payType, setPayType] = useState(tx.debit ? 'debit' : 'credit')
  const { user_id: userId, description, merchant_id: merchantId, amount } = tx
  return (
    <div css={globalstyles.formstyles}>
      <div className='id-type'>
        <label>
          User ID:
          <input disabled name='user_id' placeholder={userId} type='text' value={userId} />
        </label>
        <label>
          Merchant ID:
          <input disabled name='merchant_id' placeholder={merchantId} type='text' value={merchantId} />
        </label>
      </div>
      <div className='description'>
        <label>
          Description:
          <input disabled name='description' placeholder={description} type='text' value={description} />
        </label>
      </div>
      <div className='payment-container'>
        <label>
          Amount:
          <input disabled id='amount' name='amount' placeholder={amount} type='number' value={amount} />
        </label>
        <div className='payment-type'>
          <label>
            {' '}
            Payment Type:
            <select disabled name='paytype-select' onBlur={e => setPayType(e.target.value)} value={payType}>
              <option value='debit'>Debit</option>
              <option value='credit'>Credit</option>
            </select>
          </label>
        </div>
      </div>
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
      amount: number,
      __typename: object
    })
  )
}
