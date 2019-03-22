import styled from "styled-components";

interface IOwnProps {
	height?: string | number;
}

export const StyledDiv = styled.div<IOwnProps>`
	${(props: IOwnProps) => props.height && `height: calc(${props.height})`}
`;
