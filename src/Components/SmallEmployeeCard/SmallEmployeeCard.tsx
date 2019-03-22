import * as React from 'react';
import { IRole } from 'src/Model/Employee/IRole';
import { ITeam } from 'src/Model/Team/ITeam';
import { StyledSmallCard } from '../Styled/StyledSmallCard';
import { StyledRoundedImg, StyledRoundedImgSize } from '../Styled/StyledRoundedImg';
import { StyledSmallCardLeftContent } from '../Styled/StyledSmallCardLeftContent';
import { StyledText, StyledTextFontSize } from '../Styled/StyledText';

interface IProps {
	img: string;
	name: string;
	role: IRole;
	team: ITeam;
}

export const SmallEmployeeCard = (props: IProps) => {
	return (
		<StyledSmallCard>
			<StyledSmallCardLeftContent>
				<StyledRoundedImg src={props.img} size={StyledRoundedImgSize.SMALL}/>
			</StyledSmallCardLeftContent>
			<div>
				<StyledText size={StyledTextFontSize.BIG}>{props.name}</StyledText>
				<StyledText>{props.role}</StyledText>
				<StyledText size={StyledTextFontSize.SMALL}>{props.team}</StyledText>
			</div>
		</StyledSmallCard>
	);
};
