import styled from 'styled-components';
import { IThemeProps } from 'src/Model/theme';

export enum StyledButtonScheme {
	DARK = 'DARK',
	DEFAULT = 'DEFAULT',
}
interface IOwnProps {
	scheme?: StyledButtonScheme; 
}

type IProps = IOwnProps & IThemeProps;

export const StyledButton = styled.button<IProps>`
	border: none;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	color: white;
	border-radius: ${(props: IProps) => props.theme.borderRadius}
	width: 100%
	padding: 20px 0;
	background: ${(props: IProps) => props.scheme === StyledButtonScheme.DARK ? 'black' : props.theme.darkFontColor}
	&:focus {
		outline: 0;
	}
`;
