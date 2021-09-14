import styled from 'styled-components';
import { colorBg, colorTypho, fontSize, fontWeight } from '../../util/variables';
import { device } from '../../util/devices';

export const BUTTON = styled.span`
    display: inline-flex;
    margin: 0 7px 7px 0;
    font-size: ${ fontSize.tag };
    color: ${ colorTypho.tag };
    font-weight: ${ fontWeight.tag };
    border-radius: 20px;
    white-space: nowrap;

    @media ${device.mobile} { 
        padding: 3.5px 7px;
    }

    @media ${device.exceptMobile} {
        padding: 2.5px 8px;
    }
`;

// A new component based on BUTTON, but with  override styles
export const REDBUTTON = styled(BUTTON)`
    background: ${ colorBg.tagRed };
`;

export const BLUEBUTTON = styled(BUTTON)`
    background: ${ colorBg.tagBlue };
`;

export const GREYBUTTON = styled(BUTTON)`
    background: ${ colorBg.tagGrey };
`;