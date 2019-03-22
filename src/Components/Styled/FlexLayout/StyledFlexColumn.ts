import styled from "styled-components";

interface IOwnProps {
	height?: string;
}

export const StyledFlexColumn = styled.div<IOwnProps>`
	${(props: IOwnProps) => props.height && `height: ${props.height}`}
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
