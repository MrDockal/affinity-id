import styled from "styled-components";
import { IThemeProps } from 'src/Model/theme';

export interface IOwnProps {
	active?: boolean;
	clickAble?: boolean;
	marginTop?: string;
}

export type IProps = IOwnProps & IThemeProps;

export const StyledCard = styled.div<IProps>`
	border-radius: ${(props: IProps) => props.theme.borderRadius};
	${(props: IProps) => !props.active && 'box-shadow: 1px 5px 52px -13px rgba(0,0,0,0.55);'}
	${(props: IProps) => (!props.active && props.clickAble) && 'cursor: pointer;'}
	${(props: IProps) => props.marginTop && `margin-top: ${props.marginTop};`}
	padding: ${(props: IProps) => props.theme.boxPadding};
	background-color: white;
	flex: 1;
`;
