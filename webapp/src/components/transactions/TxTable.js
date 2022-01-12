import React, { useState } from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'
import Modal from '../modal/modal'
import SingleTx from '../../pages/transaction/SingleTx'

const styles = css`
  width: 100%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px;

  tbody {
    width: 100%;
  }

  a {
    color: black;
  }

  table,
  td,
  th {
    border: none;
  }

  .table-data:nth-of-type(even) {
    background: #fff;
    &:hover {
      background: pink;
    }
  }
  .table-data:nth-of-type(odd) {
    background: #ccc;
    &:hover {
      background: blue;
    }
  }

  .header {
    font-weight: bold;
    width: 100%;
  }

  .table-data {
    height: 40px;
    cursor: pointer;
  }
  .header td {
    padding-bottom: 24px;
  }
  .checkmark {
    text-align: center;
  }
`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data }) {
  const [showTx, setShowTx] = useState({})
  const [visible, setVisible] = useState(false)

  const handleEdit = tx => {
    setVisible(true)
    setShowTx(tx)
  }

  return (
    <>
      <Modal isVisible={visible}>
        <SingleTx exitModal={() => setVisible(false)} setVisible={setVisible} tx={showTx} />
      </Modal>
      <table css={styles}>
        <tbody>
          <tr className='header'>
            <td>ID</td>
            <td>User ID</td>
            <td>Description</td>
            <td>Merchant ID</td>
            <td>Debit</td>
            <td>Credit</td>
            <td>Amount</td>
          </tr>
          {data.map(tx => {
            const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
            return (
              <tr className='table-data' data-testid={`transaction-${id}`} key={`transaction-${id}`} onClick={() => handleEdit(tx)} onKeyDown={() => handleEdit(tx)} role='button' tabIndex={id}>
                <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td className='checkmark' data-testid={makeDataTestId(id, 'debit')}>
                  {debit ? '✓' : ''}
                </td>
                <td className='checkmark' data-testid={makeDataTestId(id, 'credit')}>
                  {credit ? '✓' : ''}
                </td>
                <td data-testid={makeDataTestId(id, 'amount')}>{amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

TxTable.propTypes = {
  data: arrayOf(
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
