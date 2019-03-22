import * as React from 'react';
import { IRole } from 'src/Model/Employee/IRole';
import { ITeam } from 'src/Model/Team/ITeam';
import { StyledCard } from '../Styled/Card/StyledCard';
import { StyledFlexRow } from '../Styled/FlexLayout/StyledFlexRow';
import { StyledDiv } from '../Styled/Elements/StyledDiv';
import { StyledRoundedImg, StyledRoundedImgSize } from '../Styled/Img/StyledRoundedImg';
import { StyledText, StyledTextFontSize } from '../Styled/Text/StyledText';
import { theme } from 'src/Model/theme';

interface IProps {
	img: string;
	name: string;
	role: IRole;
	team: ITeam;
}

export const SmallEmployeeCard = (props: IProps) => {
	return (
		<StyledCard>
			<StyledFlexRow>
				<StyledDiv style={{paddingRight: theme.boxPadding}}>
					<StyledRoundedImg src={props.img} size={StyledRoundedImgSize.SMALL}/>
				</StyledDiv>
				<div>
					<StyledText size={StyledTextFontSize.BIG}>{props.name}</StyledText>
					<StyledText>{props.role}</StyledText>
					<StyledText size={StyledTextFontSize.SMALL}>{props.team}</StyledText>
				</div>
			</StyledFlexRow>
		</StyledCard>
	);
};
