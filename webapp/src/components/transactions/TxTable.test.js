import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { TxTable } from './TxTable'

const mockData = [
  {
    id: '61df2d17846d9ba57da6f806',
    user_id: 'kyla123',
    amount: 50,
    credit: true,
    debit: false,
    description: 'bought the office',
    merchant_id: 'walmart'
  },
  {
    id: '61df2d17846d9ba57da6f807',
    user_id: 'john777',
    amount: 50,
    credit: true,
    debit: false,
    description: 'needed a snack',
    merchant_id: '711'
  },
  {
    id: '61df2d17846d9ba57da6f808',
    user_id: 'lucky222',
    amount: 99,
    credit: true,
    debit: false,
    description: 'I was hungry so I ordered pizza',
    merchant_id: 'dominoes'
  }
]

describe('Transactions Table', () => {
  it('Renders Tx Component', () => {
    render(<TxTable data={mockData} />)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })
})

describe('Roman Numerals', () => {
  it('Roman Numerals button does not say "Regular Numers" unless clicked', async () => {
    render(<TxTable data={mockData} />)
    expect(screen.queryByText(/Regular Numbers/)).toBeNull()
    expect(screen.queryByText(/Roman Numerals/)).toBeInTheDocument()
    fireEvent.click(screen.getByText('Roman Numerals'))
    await expect(screen.queryByText(/Regular Numbers/)).toBeInTheDocument()
  })
})
