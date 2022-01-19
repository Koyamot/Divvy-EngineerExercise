import React, { useState } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { css, Global } from '@emotion/core'
import Cookies from 'js-cookie'
import * as globalStyles from '../../styles/GlobalStyles'
import { node } from 'prop-types'

const langSwitch = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 16px;
  p {
    margin: 0 16px 0 0;
  }
`

const LangSwitcher = ({ children }) => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState({ language: 'en' })
  const { t } = useTranslation()

  const onChange = e => {
    Cookies.remove('i18next')
    const langPick = e.target.value
    Cookies.set('i18next', langPick)
    if (window.confirm('Switch Language?')) {
      setCount(previousCount => previousCount + 1)
      Cookies.set('count', count)
      i18next.changeLanguage(langPick)
      setValue({ language: langPick })
    }
  }
  const onBlur = () => {}

  return (
    <>
      <Global styles={globalStyles.globalStyles} />
      <div className={`globalstyles ${value.language}-lang`}>
        <div css={langSwitch}>
          <p>{t('langCount', { count })}</p>
          <select name='language' onBlur={onBlur} onChange={onChange} value={value.language}>
            <option value='en'>{t('en_select')}</option>
            <option value='bv'>{t('bv_select')}</option>
          </select>
        </div>
        <div className='APP'>{children}</div>
      </div>
    </>
  )
}

LangSwitcher.propTypes = {
  children: node
}

export default LangSwitcher
