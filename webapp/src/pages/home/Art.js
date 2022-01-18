import { css } from '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Art () {
  const { t } = useTranslation()
  return (
    <div css={art}>
      <h1>{t('shameless_plug')}</h1>
      <h2>I create NFTs under the alias <a href='https://opensea.io/atinyglitch'>ATinyGlitch</a></h2>
      <p>The two gifs below I created using Procreate, and Adobe After Effects. My goal is to evoke specific emotions through my art.</p>
      <div className='art-container'>
        <img
          alt='rainy daze'
          className='hvr-bob'
          src='https://media.giphy.com/media/tRZ3eF6ku6xzB1ly73/giphy-downsized-large.gif'
        />
        <img alt='glowy daze' className='hvr-bob' src='https://media.giphy.com/media/lQ9T4SKd3tPv4OD96x/giphy.gif' />
      </div>
    </div>
  )
}

const art = css`
  background: none;
  display: grid;

  .art-container {
    display: grid;
    grid-template-columns: auto auto auto;
    img {
      width: 400px;
    }
  }
`
