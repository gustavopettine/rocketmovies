import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 6px;
    margin-right: 10px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK};
`;