import React, { useState } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()
  const onChange = e => {
    if (window.confirm('Switch Language?')) {
      i18next.changeLanguage(e.target.value)
      setCount(previousCount => previousCount + 1)
    }
  }

  const onBlur = e => {}
  return (
    <div>
      <p>{t('langCount', { count })}</p>
      <select name='language' onBlur={onBlur} onChange={onChange}>
        <option value='en'>Humans</option>
        <option value='bv'>Boov</option>
      </select>
    </div>
  )
}

export default LangSwitcher
