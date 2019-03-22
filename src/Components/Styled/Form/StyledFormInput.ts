import styled from 'styled-components';
import { IThemeProps } from 'src/Model/theme';
import { IProps } from '../Card/StyledCard';

export const StyledFormInput = styled.input<IThemeProps>`
	border: 1px solid ${(props: IProps) => props.theme.minorFontColor};
	border-radius: 5px;
	width: 100%
	padding: 10px;
	box-sizing: border-box; 
	&:focus {
		outline: 0;
	}
`;
