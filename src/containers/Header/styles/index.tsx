import styled from 'styled-components';
import bgPhotos from '../../../images/header.jpg';


const HeaderWrapper = styled.header`
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  position: relative;
  height: 70%;
  background-image: linear-gradient(rgba(45, 93, 225, 0.5), rgba(9, 30, 220, 0.5)), url(${bgPhotos});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
`;