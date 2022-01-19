import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home () {
  const { t } = useTranslation()
  return (
    <div css={styles}>
      <div className='hero-section'>
        <h1>Let&apos;s Pinch Some Pennies!</h1>
      </div>
      <div className='section-a'>
        <h2>What do we offer that no one else does?</h2>
        <p>{t('home_p_a')}</p>
        <p>{t('home_p_b')}</p>
      </div>
      <SectionB className='section-b'>
        <h2>How do you access it?</h2>
        <p>{t('home_p_c')}</p>
        <div className='divButton-container '>
          <Link to='/Account'>
            <Button className='button hvr-ripple-out'>Go to Account</Button>
          </Link>
        </div>
      </SectionB>
    </div>
  )
}

const styles = css`
  .hero-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    background: url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      no-repeat center;
    & h1 {
      color: white;
      color: #fff;
      text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
      font-size: 54px;
    }
  }

  h2 {
    text-align: center;
  }

  .divButton-container {
    margin-top: 40px;
  }
`
const SectionB = styled.div`
  text-align: center;
  a {
    text-decoration: none;
  }
  p {
    text-align: left;
  }
`
const Button = styled.div`
  display: inline-block;
  padding: 16px 40px;
  background: #cacbf3;
  border-radius: 8px;
`
