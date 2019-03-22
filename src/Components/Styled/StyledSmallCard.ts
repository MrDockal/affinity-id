import styled from "styled-components";
import { IThemeProps } from 'src/Model/theme';

export interface IOwnProps {
	active?: boolean;
}

export type IProps = IOwnProps & IThemeProps;

export const StyledSmallCard = styled.div<IProps>`
	border-radius: ${(props: IProps) => props.theme.borderRadius};
	${(props: IProps) => !props.active && 'box-shadow: 1px 5px 52px -13px rgba(0,0,0,0.55);'}
	${(props: IProps) => !props.active && 'cursor: pointer;'}
	padding: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: white;
`;
