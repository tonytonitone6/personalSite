import React, { FunctionComponent, Fragment, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from '../../locale/en.US';
import zh_CN from '../../locale/zh.CN';
import Header from '../Header';

addLocaleData([...en, ...zh]);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
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

const App: FunctionComponent = () => {

  const [language, setLanguage] = useState(en_US);

  return (
    <IntlProvider locale={'en'} messages={language}>
      <Fragment>
        <GlobalStyle />
        <Header />
      </Fragment>
    </IntlProvider>
  )
}

export default App;