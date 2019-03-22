import styled from "styled-components";

interface IStyledFlexRowProps {
	justifyContent?: string;
}

export const StyledFlexRow = styled.div<IStyledFlexRowProps>`
	display: flex;
	flex-direction: row;
	${(props: IStyledFlexRowProps) => props.justifyContent && `justify-content: ${props.justifyContent}`}
`;

export const StyledFlexCentered = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
