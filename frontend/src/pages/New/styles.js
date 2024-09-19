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
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 64px auto;

    > h1 {
        font-size: 36px;
        font-weight: 500;
        margin: 56px 0 32px 0;
    }

    .first {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .second {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 16px;
        }
    }
`;