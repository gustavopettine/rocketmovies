import styled from 'styled-components';

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

    > button:first-child {
        align-self: start;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        /* margin-top: 56px; */
    }

    > p {
        font-size: 16px;
        margin-top: 32px;
        text-align: justify;
    }
`;