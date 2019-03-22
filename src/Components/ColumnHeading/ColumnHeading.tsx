import * as React from 'react';
import { StyledText, StyledTextFontSize } from '../Styled/Text/StyledText';
import { StyledFlexRow } from '../Styled/FlexLayout/StyledFlexRow';

interface IProps {
	title: string;
	sortBy?: string;
	onClick?: () => void;
}

export const ColumnHeading = (props: IProps) => {
	return (
		<StyledFlexRow justifyContent='space-between'>
			<StyledText size={StyledTextFontSize.BIG}>
				{props.title}
			</StyledText>
			<StyledText>
				{
					props.sortBy ?
						<span>
							Sort by: <span onClick={props.onClick && props.onClick} style={{fontWeight: 'bold'}}>{props.sortBy}</span>
						</span> :
						null
				}
			</StyledText>
		</StyledFlexRow>
	);
}