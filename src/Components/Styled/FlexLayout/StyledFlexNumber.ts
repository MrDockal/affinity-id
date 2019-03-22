import styled from 'styled-components';

interface IProps {
	flexNumber?: number;
}

export const StyledFlexNumber = styled.div<IProps>`
	flex: ${(props: IProps) => props.flexNumber || 1};
`;
