import styled from "styled-components";

interface IOwnProps {
	height?: string | number;
	marginTop?: string | number;
}

export const StyledDiv = styled.div<IOwnProps>`
	${(props: IOwnProps) => props.height && `height: calc(${props.height});`}
	${(props: IOwnProps) => props.marginTop && `margin-top: ${props.marginTop};`}
`;
