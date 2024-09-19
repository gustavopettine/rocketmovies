import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 10px;
    padding: 32px;
    margin-top: 32px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 26px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 16px;
        margin-top: 32px;
        text-align: justify;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 32px;
    }
`;