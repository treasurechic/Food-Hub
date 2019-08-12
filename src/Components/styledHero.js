import styled from 'styled-components';
import defaultImg from '../img/hub2.jpg';

const styledHero = styled.header`
  min-height:60vh;
  background:url(${props => props.img? props.img :defaultImg}) center/cover no-repeat;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export default styledHero;