import styled from 'styled-components';
import { device } from '../../util/devices';

export const MAIN = styled.main`
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    min-height: 100vh;

    @media ${device.exceptMobile} { 
        padding: 0 30px;
        max-width: 1376px;
        margin: 0 auto;
    }
`;

export const GRID = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 90px 0 30px;
  margin: 0 -4px;

  @media ${device.exceptMobile} { 
    flex-direction: row;
    padding: 0 0 60px;
  }
`;

