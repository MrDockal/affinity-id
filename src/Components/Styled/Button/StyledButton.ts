import styled from 'styled-components';
import { IThemeProps } from 'src/Model/theme';

export const StyledButton = styled.button<IThemeProps>`
	border: none;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	color: white;
	border-radius: ${(props: IThemeProps) => props.theme.borderRadius}
	width: 100%
	padding: 20px 0;
	background: ${(props: IThemeProps) => props.theme.darkFontColor}
	&:focus {
		outline: 0;
	}
`;
