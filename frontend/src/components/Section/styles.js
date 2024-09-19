import styled from 'styled-components';

export const Container = styled.section`
    margin: 32px 0;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 28px;
    }
`;