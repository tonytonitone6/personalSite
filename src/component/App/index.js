import React, { Component } from 'react';
import Header from '../Header';
import { createGlobalStyle } from "styled-components";

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


export default class extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}