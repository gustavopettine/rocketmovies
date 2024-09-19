import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 128px;

    padding: 0 80px;

    > h1 {
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .first {
        display: flex;
        align-items: center;
        gap: 16px;

        .second {
            display: flex;
            flex-direction: column;
            line-height: 22px;

            strong {
                font-size: 20px;
                color: ${({ theme }) => theme.COLORS.WHITE};
                white-space: nowrap;
            }

            .logout {
                align-self: end;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }
    }
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;