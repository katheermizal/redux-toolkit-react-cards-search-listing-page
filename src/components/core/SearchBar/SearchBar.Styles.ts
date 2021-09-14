import styled from 'styled-components';
import { device } from '../../util/devices';
import { colorBg } from '../../util/variables';

export const SEARCHBAR = styled.section`
    display: flex;
    background-color: ${colorBg.searchBar};

    @media ${device.exceptMobile} { 
        padding: 24px 0;
    }

    @media ${device.mobile} {
        height: 78px;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        padding: 0 20px;
        align-items: center;
        box-shadow: 0px 1px 3px 0px rgb(12 12 12 / 22%);
		z-index: 2;
    }
`;