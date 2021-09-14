import styled from 'styled-components';

export const LOADER = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 100px;

    .loading_icon {
        display: flex;
        width: 150px;
        
        img {
            width: 100%;
            height: 100%;
        }
    }
`;