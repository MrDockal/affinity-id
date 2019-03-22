import styled from 'styled-components';
import { IThemeProps } from 'src/Model/theme';

export const StyledHr = styled.div<IThemeProps>`
	border-top: 1px solid ${(props: IThemeProps) => props.theme.fontColor};
	width: 100%;
`;
