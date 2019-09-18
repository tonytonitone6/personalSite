import React, {
  FunctionComponent,
  Fragment,
  useState,
  useEffect
} from 'react'
import {createGlobalStyle} from 'styled-components'
import {addLocaleData, IntlProvider} from 'react-intl'
import {ApolloProvider} from '@apollo/react-hooks'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

import en_US from '@locales/en.US'
import zh_CN from '@locales/zh.CN'
import Header from '@containers/Header'
import Content from '@components/Content'
import {client} from '@utils/api'
import {MenuContextProvider} from '@context/index'
import {menuReducer} from '@reducers/index'
import {
  width,
  columns
} from '@styles/grid';


addLocaleData([...en, ...zh])

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    :focus {
      outline: none;
    }
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 17px;
  }

  @media (max-width: 576px) {
    [class*="col"] {
      flex: 0 0 calc(width / columns * 100%);
    }
  }
`

const getWebSiteLanguage = (): string => {
  if (window) {
    return window.navigator.language.split('-')[0]
  }
  return navigator.language.split('-')[0]
}

const setMesLang = (lng: any) => {
  switch (lng) {
    case 'en':
      return en_US
      break

    default:
      break
  }
}

interface TypeContextProps {
  dispatch: () => void
}

const App: FunctionComponent = (): JSX.Element => {
  const [language, setLanguage] = useState(() => getWebSiteLanguage())
  const [messagesLang, setMessagesLang] = useState(() => setMesLang(language))

  useEffect(() => {
    setMessagesLang(() => setMesLang(language))
  }, [language])

  return (
    <ApolloProvider client={client}>
      <MenuContextProvider reducer={menuReducer}>
        <IntlProvider locale={language} messages={messagesLang}>
          <Fragment>
            <GlobalStyle />
            <Header />
            <Content />
          </Fragment>
        </IntlProvider>
      </MenuContextProvider>
    </ApolloProvider>
  )
}

export default App
