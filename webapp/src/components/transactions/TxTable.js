import React, { useState } from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Modal from '../modal/modal'
import SingleTx from '../../pages/transaction/SingleTx'
import AddTx from './AddTx'
import RomanTranslate from '../roman/RomanTranslate'
import RomanTest from '../roman/RomanTest'

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

const ButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 24px;
`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data }) {
  const [singleTx, setSingleTx] = useState({})
  const [editVisible, setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)
  const [isRoman, setIsRoman] = useState(false)

  const handleEdit = tx => {
    setEditVisible(true)
    setSingleTx(tx)
  }

  return (
    <>
      <Modal isVisible={editVisible}>
        <SingleTx exitModal={() => setEditVisible(false)} setVisible={setEditVisible} tx={singleTx} />
      </Modal>
      <Modal isVisible={addVisible}>
        <AddTx exitModal={() => setAddVisible(false)} setVisible={setAddVisible} tx={singleTx} />
      </Modal>
      <ButtonContainer>
        <div className='add-button'>
          <button onClick={() => setAddVisible(true)}>Add Transaction</button>
        </div>
        <div className='roman-translate'>
          {isRoman ? (
            <button onClick={() => setIsRoman(!isRoman)}>Regular Numbers</button>
          ) : (
            <button onClick={() => setIsRoman(!isRoman)}>Roman Numerals</button>
          )}
        </div>
      </ButtonContainer>
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
              <tr
                className='table-data'
                data-testid={`transaction-${id}`}
                key={`transaction-${id}`}
                onClick={() => handleEdit(tx)}
                onKeyDown={() => handleEdit(tx)}
                role='button'
                tabIndex={id}
              >
                <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td data-testid={makeDataTestId(id, 'userId')}>{isRoman ? RomanTest(userId) : userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td className='checkmark' data-testid={makeDataTestId(id, 'debit')}>
                  {debit ? '✓' : ''}
                </td>
                <td className='checkmark' data-testid={makeDataTestId(id, 'credit')}>
                  {credit ? '✓' : ''}
                </td>
                <td data-testid={makeDataTestId(id, 'amount')}>{isRoman ? RomanTranslate(amount) : amount}</td>
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
