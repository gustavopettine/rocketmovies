import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 26px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    > a {
        margin-top: 128px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        span {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;