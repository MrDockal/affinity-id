import styled from 'styled-components';
import { IThemeProps, theme } from 'src/Model/theme';

export enum StyledButtonScheme {
	DARK = 'DARK',
	GREEN = 'GREEN',
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
	background: ${(props: IProps) => {
		if (!props.scheme) {
			return props.theme.darkFontColor;
		}
		switch (props.scheme) {
			case StyledButtonScheme.DARK:
				return 'black';
			case StyledButtonScheme.GREEN:
				return theme.greenColor;
			default:
				return props.theme.darkFontColor;
		}
	}}
	&:focus {
		outline: 0;
	}
`;
