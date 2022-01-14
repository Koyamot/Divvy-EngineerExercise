import { ApolloProvider } from '@apollo/client'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { client } from './network/apollo-client'
import AppRouter from './routes'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: 'en',
    supportedLngs: ['en', 'bv'],
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    useDataAttrOptions: true,
    backend: { loadPath: '/locales/{{lng}}/translation.json' },
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    }
  })

ReactDOM.render(
  <Suspense fallback='Loading...'>
    <div data-app-init=''>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </div>
  </Suspense>,
  document.getElementById('react-app')
)
