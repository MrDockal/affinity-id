import styled from 'styled-components';

interface IProps {
	flexNumber?: number;
}

export const StyledAppColumns = styled.div<IProps>`
	flex: ${(props: IProps) => props.flexNumber || 1};
	padding: 0 40px;
`;
