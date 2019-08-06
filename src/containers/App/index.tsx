import React, { FunctionComponent, Fragment, useState, useEffect, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { addLocaleData, IntlProvider } from 'react-intl';
import { ApolloProvider } from 'react-apollo';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import en_US from '@locales/en.US';
import zh_CN from '@locales/zh.CN';
import Header from '@containers/Header';
import Content from '@components/Content';
import useLocalStorage from '@utils/useLocalstorage';
import { client } from '@utils/api';
import { MenuContext } from '@context/menuContext';

addLocaleData([...en, ...zh]);

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
`;

const getWebSiteLanguage = ():string => {
  if (window) {
    return window.navigator.language.split('-')[0];
  }
  return navigator.language.split('-')[0];
}

const setMesLang = (lng: any) => {
  switch(lng) {
    case 'en':
      return en_US;
      break;

    default:
      break;
  }
}

const App: FunctionComponent = (): JSX.Element => {
  const [language, setLanguage] = useState(() => getWebSiteLanguage());
  const [messagesLang, setMessagesLang] = useState(() => setMesLang(language));
  const value = useContext(MenuContext);

  console.log(value);

  useEffect(() => {
    setMessagesLang(() => setMesLang(language));
  }, [language]);


  
  return (
    <ApolloProvider client={client}>
      <MenuContext.Provider value={{}}>
        <IntlProvider locale={language} messages={messagesLang}>
          <Fragment>
            <GlobalStyle />
            <Header />
            <Content />
          </Fragment>
        </IntlProvider>
      </MenuContext.Provider>
    </ApolloProvider>
  )
}

export default App;