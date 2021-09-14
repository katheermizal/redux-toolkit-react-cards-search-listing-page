import styled from 'styled-components';
import { colorBg, colorTypho, fontWeight } from '../../util/variables';
import { device } from '../../util/devices';

export const MESSAGE = styled.div`
    display: flex;
    padding: 10px 20px;
    color: ${ colorTypho.message };
    font-weight: ${ fontWeight.message };
    border-radius: 10px;
    white-space: nowrap;

    @media ${device.mobile} {
        margin: 120px 0;
        justify-content: center;
    }

    @media ${device.exceptMobile} {
        margin: 30px 0;
    }
`;

// A new component based on BUTTON, but with  override styles
export const ERRORMESSAGE = styled(MESSAGE)`
    background: ${ colorBg.messageError };
`;