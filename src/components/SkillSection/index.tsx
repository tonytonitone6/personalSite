import React from 'react';
import { 
  ExperienceSection 
} from './styles';

import d3 from 'd3';


class SkillSection extends React.Component {
  
  private expSection = React.createRef<HTMLDivElement>()

  componentDidMount() {
    // const { getLocation } = this.props;
    // getLocation(this.expSection);
  }
  

  render() {  
    return (
      <ExperienceSection ref={this.expSection}>
        <p>123</p>
      </ExperienceSection>
    );
  }
}


export default SkillSection;
