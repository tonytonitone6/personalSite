import React from 'react';
import { component } from 'react-decoration';
import { 
  ExperienceSection 
} from './styles';
import d3 from 'd3';


class SkillSection extends React.Component {


  componentDidMount() {
    const { getLocation } = this.props;
    getLocation(this.expSection);
  }
  

  render() {  
    return (
      <ExperienceSection ref={(experience) => this.expSection = experience}>
        <p>123</p>
      </ExperienceSection>
    );
  }
}


export default SkillSection;
