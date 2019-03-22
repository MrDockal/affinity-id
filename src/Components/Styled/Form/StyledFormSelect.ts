import styled from 'styled-components';
import { IThemeProps } from 'src/Model/theme';
import { IProps } from '../Card/StyledCard';

export const StyledFormSelect = styled.select<IThemeProps>`
	border: 1px solid ${(props: IProps) => props.theme.minorFontColor};
	background: white;
	border-radius: 5px;
	width: 100%
	padding: 10px;
	box-sizing: border-box; 
	&:focus {
		outline: 0;
	}
`;
