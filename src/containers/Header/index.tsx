import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';


class Header extends Component<RouteComponentProps> {

  public state = {
    loading: true,
    showModal: false
  };

  private name = 'stan';

  public componentDidMount() {
  }



  render() {
    return(
      <div>
        456
      </div>
    )
  }
}

export default Header;