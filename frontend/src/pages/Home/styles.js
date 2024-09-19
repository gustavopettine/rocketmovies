import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
    }
`;

export const Content = styled.div`
    max-width: 720px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const NewMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 16px;

    width: 184px;
    height: 48px;
    border-radius: 8px;
`;