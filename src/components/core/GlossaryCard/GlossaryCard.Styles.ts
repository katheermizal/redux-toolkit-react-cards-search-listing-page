import styled from 'styled-components';
import { colorBg, fontSize } from '../../util/variables';
import { device } from '../../util/devices';

export const CARD = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 4px 8px;
  background-color: ${ colorBg.card };
  transition: 0.3s ease all;

  .title {
    margin-bottom: 10px;
  }
  
  .image {
    height: 250px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
  }
  
  .image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
    object-position: center;
  }

  .description {
    margin-bottom: 9px;
  }

  .tags {
    margin-bottom: 10px;
  }

  .bottom p {
    font-size: ${fontSize.small}
  }

  .separator {
    margin-left: 3px;
    margin-right: 3px;
    font-size: ${fontSize.body};
    font-weight: 600;
  }

  @media ${device.mobile} { 
    width: 100%;
    padding: 9.5px 16px 20px;
  }

  @media ${device.exceptMobile} { 
    width: calc((100% - 16px)/2);
    min-height: 185px;
    padding: 9.5px 16px 73px;

    .bottom {
      bottom: 20px;
      left: 16px;
      right: 16px;
      position: absolute;
    }
  }

  @media ${device.exceptTablet} { 
    width: calc((100% - 24px)/3);
  }
`;