import styled from 'styled-components';
import { device } from '../../util/devices';

export const FIELD = styled.div`
    position: relative;
    width: 100%;
    max-width: 385px;

    input {
        width: 100%;
    }

    .close_icon {
        width: 19px;
        height: 19px;
        padding: 4px;
        display: flex;
        position: absolute;
        top: 5.5px;
        right: 5.5px;
        cursor: pointer;
        transition: 0.3s ease all;
        border-radius: 2px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media ${device.exceptTablet} { 
        .close_icon:hover {
            background-color: #eee;
        }
    }
`;