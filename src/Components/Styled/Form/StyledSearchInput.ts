import styled from 'styled-components';
import { IThemeProps } from 'src/Model/theme';
import { IProps } from '../Card/StyledCard';

export const StyledSearchInput = styled.input<IThemeProps>`
	border: 1px solid ${(props: IProps) => props.theme.minorFontColor};
	border-radius: ${(props: IThemeProps) => props.theme.borderRadius}
	width: 100%
	padding: 20px 10px;
	box-sizing: border-box; 
	&:focus {
		outline: 0;
	}
`;
