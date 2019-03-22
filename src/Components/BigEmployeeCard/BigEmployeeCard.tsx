import * as React from 'react';
import { IEmployee } from 'src/Model/Employee/IEmployee';
import { theme } from 'src/Model/theme';
import { StyledCard } from '../Styled/Card/StyledCard';
import { StyledFlexColumn } from '../Styled/FlexLayout/StyledFlexColumn';
import { StyledDiv } from '../Styled/Elements/StyledDiv';
import { StyledRoundedImgSize, StyledRoundedImg } from '../Styled/Img/StyledRoundedImg';
import { StyledText, StyledTextFontSize } from '../Styled/Text/StyledText';
import { StyledHr } from '../Styled/Elements/StyledHr';
import { StyledCardSection } from '../Styled/Card/StyledCardSection';
import { StyledButton } from '../Styled/Form/StyledButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
	employee: IEmployee;
}

export const BigEmployeeCard = withRouter((props: IProps) => {
	return (
		<StyledCard marginTop={'200px'}>
			<StyledFlexColumn height={theme.employeeBoxHeight}>
				<StyledDiv height={`${StyledRoundedImgSize.BIG} / 2`}>
					<StyledRoundedImg size={StyledRoundedImgSize.BIG} shiftTop={true} src={props.employee.img} />
				</StyledDiv>
				<StyledText size={StyledTextFontSize.HUGE}>{props.employee.name}</StyledText>
				<StyledText size={StyledTextFontSize.SMALL}>{props.employee.email}</StyledText>
				<div>
					<span onClick={() => props.history.push(`/customer-detail/${props.employee.email}/edit`)}><FontAwesomeIcon icon='pen'/></span>
					<FontAwesomeIcon icon='times' />
				</div>
				<StyledHr />
				<StyledCardSection>
					<div>
						<StyledText size={StyledTextFontSize.BIG}>Role</StyledText>
						<div>{props.employee.role}</div>
					</div>
					<div>
						<StyledText size={StyledTextFontSize.BIG}>Team</StyledText>
						<div>{props.employee.team}</div>	
					</div>
				</StyledCardSection>
				<StyledHr />
				<StyledCardSection>
					<div>
						<StyledText size={StyledTextFontSize.BIG}>Address</StyledText>
						<div>{props.employee.address}</div>
					</div>
				</StyledCardSection>
				<StyledButton>
					Share
				</StyledButton>
			</StyledFlexColumn>
		</StyledCard>
	);
});
