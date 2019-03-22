import styled from "styled-components";
import { IThemeProps } from 'src/Model/theme';

export enum StyledRoundedImgSize {
	SMALL = '4rem',
	BIG = '8rem',
}

interface IOwnProps {
	size: StyledRoundedImgSize;
}

type IProps = IThemeProps & IOwnProps;

export const StyledRoundedImg = styled.img<IProps>`
	border-radius: 50%;
	width: ${(props: IProps) => props.size};
`;
