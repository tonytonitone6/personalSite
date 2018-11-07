import React from 'react';
import { component } from 'react-decoration';
import { 
  ExperenceSection 
} from './styles';
import d3 from 'd3';


class SkillSection extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    // (info) => this.skillSectionInfo = info
  }

  componentDidMount() {
    const { getLocation } = this.props;
    getLocation(this.myRef);
  }
  

  render() {  
    return (
      <ExperenceSection ref={this.myRef}>
        <p>123</p>
      </ExperenceSection>
    );
  }
}


export default SkillSection;
