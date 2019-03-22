import styled from "styled-components";
import { IThemeProps } from 'src/Model/theme';

export enum StyledTextFontSize {
	HUGE,
	BIG,
	MEDIUM,
	SMALL,
};

interface IOwnProps {
	size?: StyledTextFontSize;
}

type IProps = IThemeProps & IOwnProps;

export const StyledText = styled.div<IProps>`
	${(props: IProps) => {
		switch (props.size) {
			case StyledTextFontSize.HUGE:
				return `
				color: ${props.theme.darkFontColor};
				font-size: 1.5rem;
				font-weight: 800;
			`;
			case StyledTextFontSize.BIG:
				return `
				font-size: 1rem;
				font-weight: 800;
			`;
			case StyledTextFontSize.MEDIUM:
			default:
				return `
				font-size: 0.9333333333333333rem;
			`;
			case StyledTextFontSize.SMALL:
				return `
				font-size: 0.8rem;
			`;
		}
	}}
`;
