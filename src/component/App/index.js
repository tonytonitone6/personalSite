import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import SkillSection from '../SkillSection';
import { createGlobalStyle } from "styled-components";
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import en_US from '../locale/en.US';
import zh_CN from '../locale/zh_CN';
import { addLocaleData, IntlProvider } from 'react-intl';

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
    font-size: 10px;
    font-weight: 400;
    color: #fff;
    line-height: 17px;
  }
`;


export default class extends Component {

  state = {
    locale: en_US,
  }

  onGetLocationRef = (location) => {
    this.setState({location: location}, () => console.log(this.state));
  }

  onScrollToSection = () => {
    const { location } = this.state;
    location.scrollIntoView({
      behavior: 'smooth',
      block: 'start'})
  }

  render() {
    const { locale } = this.state;
    return (
      <IntlProvider locale={'en'} messages={locale}>
        <React.Fragment>
          <GlobalStyle />
          <Header scroll={this.onScrollToSection} />
          <SkillSection getLocation={this.onGetLocationRef}>
          </SkillSection>
        </React.Fragment>
      </IntlProvider>
    );
  }
}