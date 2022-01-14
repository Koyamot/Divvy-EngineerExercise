import React, { useState } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { string } from 'prop-types'

const LangSwitcher = ({ lang }) => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState({ language: lang })
  const { t } = useTranslation()
  const onChange = e => {
    const langPick = e.target.value
    if (window.confirm('Switch Language?')) {
      setCount(previousCount => previousCount + 1)
      i18next.changeLanguage(langPick)
    }
    window.location.reload(false)
  }

  const onBlur = e => {
    setValue({ language: e.target.value })
  }

  return (
    <div>
      <p>{t('langCount', { count })}</p>
      <select name='language' onBlur={onBlur} onChange={onChange} value={value.language}>
        <option value='en'>Humans</option>
        <option value='bv'>Boov</option>
      </select>
    </div>
  )
}

LangSwitcher.propTypes = {
  lang: string
}

export default LangSwitcher
